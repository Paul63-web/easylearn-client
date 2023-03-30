import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-course-details',
  templateUrl: './enroll-course-details.component.html',
  styleUrls: ['./enroll-course-details.component.css']
})
export class EnrollCourseDetailsComponent implements OnInit {
  @Input() rating: number;
  @Input() readonly: boolean = false;

  stars = [1, 2, 3, 4, 5];

  constructor(
    public dialogRef: MatDialogRef<EnrollCourseDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  rate(star: number) {
    if (!this.readonly) {
      this.rating = star;
    }
  }

}
