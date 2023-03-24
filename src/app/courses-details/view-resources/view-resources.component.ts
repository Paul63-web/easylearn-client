import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddResourcesService } from 'src/app/services/add-resources.service';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.css']
})
export class ViewResourcesComponent implements OnInit {

  public panelOpenState: boolean = false;

  public loading: boolean = false;

  public message: String;

  public resources: any = [];

  constructor(
    public dialogRef: MatDialogRef<ViewResourcesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _resourcesService: AddResourcesService
  ) { }

  ngOnInit(): void {
    this._resourcesService.getCourseResources({id: this.data.courseId}).subscribe((res:any)=> {
      if(res.status == false) {
        console.log("No resources");
        this.message = res.message;
      }else{
        console.log(res.resources);
        this.resources = res.resources;
      }
    })
  }
}
