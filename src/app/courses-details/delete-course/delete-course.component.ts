import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetCoursesService } from 'src/app/services/get-courses.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _deleteCourseService: GetCoursesService
  ) { }

  ngOnInit(): void {
  }

  nullifyDelete() {
    this.dialogRef.close()
  }

  delete(courseId) {
    console.log(courseId)
    this._deleteCourseService.deleteCourse({_id:courseId}).subscribe((res: any)=> {
      console.log(res);
      if(res.status == true) this.dialogRef.close();
    },
    
    (err)=>console.log(err)
    );
  }
}
