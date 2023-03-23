import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public loginForm: FormGroup;

  public loading: boolean = false;

  public Auth: string = "";

  public passwordErr: boolean = false;

  public passwordErrMsg: string = "";

  public userNotExist: boolean = false

  public userNotExistErrMsg: string = "";

  public hide: boolean = true;

  constructor(
    private _fb: FormBuilder,
    private _Auth: AuthService,
    private router: Router
    ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {
    // setTimeout(() => {
    //   // this.userNotExist = false;
    //   console.log("Hello world");
    // }, 2000);
  }

  login() {
    this.loading = true;

    let email = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;

    let loginObj = {
      email,
      password
    }

    if(!this.loginForm.invalid) {
      this._Auth.login(loginObj).subscribe(res=> {
        if(res.isSuccess == true) {
          this.Auth = res.token;
          localStorage.setItem("Auth", this.Auth);
          this.router.navigate(['/user/dashboard']);
        } else if(res.isWrongPassword == true) {
          this.loading = false;
          this.passwordErr = true;
          this.passwordErrMsg = res.message;
          setTimeout(()=> {
            this.passwordErr = false;
          }, 2000);
        } else if(res.isSuccess == false && res.userNotExist == true) {
          this.loading = false;
          this.userNotExist = true;
          this.userNotExistErrMsg = res.message;
          setTimeout(()=> {
            this.userNotExist = false;
          }, 2000);
        }
      },
      err=>{
        this.loading = false;
        this.passwordErrMsg = "Awww snap! An error occured, please try again later";
        this.passwordErr = true;
        setTimeout(()=> {
          this.passwordErr = false;
        })
      }
      );
    }
  }
}
