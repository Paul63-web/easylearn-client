import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-course-price',
  templateUrl: './edit-course-price.component.html',
  styleUrls: ['./edit-course-price.component.css']
})
export class EditCoursePriceComponent implements OnInit {

  public loading = false;

  constructor(
    public dialogRef: MatDialogRef<EditCoursePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  public coursePriceDetails = this._fb.group({
    courseId: [this.data.courseId],
    newCoursePrice: ['', Validators.required]
  })
}
