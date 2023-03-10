import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from 'src/app/services/get-courses.service';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-enroll-for-a-course',
  templateUrl: './enroll-for-a-course.component.html',
  styleUrls: ['./enroll-for-a-course.component.css']
})
export class EnrollForACourseComponent implements OnInit {
  public errorMessageStatus = false;
  public errorMessage = '';
  public onlineUser: string = "";
  public messageStatus = false;
  public message = '';

  public loading: boolean = false;

  public allCourses = [];
  public resources = [];
  public prices = []

  constructor(
    private _getCourses: GetCoursesService,
    private _cartService: CartService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.onlineUser = localStorage.onlineUser;
    console.log(this.onlineUser)
    this._getCourses.getAllCourses({}).subscribe((res:any)=>{
      if(res.status == false) {
        this.errorMessageStatus = true;
        this.errorMessage = res.message
        this.messageStatus = true;
        this.message = res.message;
      }else if(res.status == true) {
        let userCou = res.courses.filter((item: any)=> item.authorId !== JSON.parse(this.onlineUser));
        this.allCourses = userCou;
        this.resources = res.resources;
        this.prices = res.prices;
        this.loading = false;
      }
    },
    err=>{
      this.loading = false;
      alert("error ti wa o");
    }
    )
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {duration: 2000});
  }

  addToCart(course: any) {
    this._cartService.addToCart(course).subscribe((res:any)=> {
      if(res.itemAlreadyInCart == true) {
        this.errorMessageStatus = true;
        console.log(res.message)
        this.messageStatus = true;
      }else {
        this.allCourses = res.allCourses
        // this._resourceService.getCourseResources()
      }
    },
    err=>(console.log(err))
    )
  }
  

}
