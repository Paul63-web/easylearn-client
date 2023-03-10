import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/Auth/auth.service';
import { AnimationFactory } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditProfileService } from '../services/edit-profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  public user ={}
  public fileSrc: string;
  public profilePixForm: FormGroup;
  public noProfile: string = "../../assets/index.png";
  public loading: boolean = false;
  public welcomeUser: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _editProfile: EditProfileService
    ) {
      this.profilePixForm = this._fb.group({
        pictureFile: ['', Validators.required],
        text: ['Hello, how are you', Validators.required]
      })
    }

  ngOnInit() :void {
    this.getSignedInUser();
  }

  getSignedInUser() {
    this._authService.getSignedInUser({}).subscribe((res: any)=> {
      if(res.status == true) {
        this.user = res.user;
        this.welcomeUser = "Welcome " + this.user['username']
      }else {
        alert(res.message);
      }
    })
  }

  onFileSelected(event: any) {
    this.loading = true;
    let profilePix = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(profilePix);
    reader.onload = () => {
      this.fileSrc = reader.result as string;
      this.profilePixForm.patchValue({pictureFile: reader.result});
    }
    console.log(this.profilePixForm.controls.text.value)

    
    // if(!this.profilePixForm.invalid) {
    //   let pictureObj = {
    //     onlineUserEmail: this.user['email'],
    //     picture: this.profilePixForm.get('pictureFile').value
    //   }
    //   console.log(pictureObj);
    //   this._editProfile.uploadProfilePix(pictureObj).subscribe((res: any)=> {
    //     console.log('Hello')
    //     if(res.success  == true) {
    //       this.loading = false;
    //       this.getSignedInUser()
    //     }
    //   },
      
    //   err=> console.log(err));
    // }else {
    //   alert("Form is invalid")
    // }
  }
}
