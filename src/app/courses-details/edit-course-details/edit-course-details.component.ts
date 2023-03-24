import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-course-details',
  templateUrl: './edit-course-details.component.html',
  styleUrls: ['./edit-course-details.component.css']
})
export class EditCourseDetailsComponent implements OnInit {

  // public courseDetails: FormGroup;
  
  public loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditCourseDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder
  ) { 
   
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  public courseDetails = this._fb.group({
    newCourseName: [this.data.course.courseName, Validators.required],
    newCourseCoverImg: ['', Validators.required],
    newCourseDescription: [this.data.course.courseDescription, Validators.required]
  }) 
}
