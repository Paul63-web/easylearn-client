import { Component, OnInit } from '@angular/core';
import { AddCourseService } from '../services/add-course.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {
  public errorMessageStatus = false
  public errorMessage = ''

  public messageStatus = false;
  public message = '';
  public courses = [];
  public notFound = false;

  public display = "none";

  public loading: boolean = false

  constructor(
    private _addCourse: AddCourseService,
    public dialog: MatDialog
  ) { }
  public obj = {}
  ngOnInit(): void {
    this.loading = true;
    this.fetchCourses();
  }

  fetchCourses() {
    this._addCourse.getMyCourses({}).subscribe((res: any)=> {
      if(res.status == false) {
        this.errorMessageStatus = true;
        this.errorMessage = res.message

        this.messageStatus = true;
        this.message = res.message;
        this.loading = false;        
      }else {
        // this.loading = true;
        this.courses = res.myCourses;
        if(!this.courses[0]) {
          this.notFound = true;
        }
        this.loading = false;
      }
    })
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  viewResourcesDialog(_id:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {option: 4, courseId: _id}
    let dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
  }

  openDetailsDialog(_id:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {option: 1, courseId: _id}
    let dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
  }
  openResourcesDialog(_id:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {option: 2, courseId: _id}
    let dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
  }
  // RTODO fix price issue
  openPriceDialog(_id:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {option: 3, courseId: _id}
    let dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
  }

  openDeleteCourseDialog(_id:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {option: 5, courseId: _id}
    let dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(()=> {
      this.fetchCourses();
    })
  }
}




