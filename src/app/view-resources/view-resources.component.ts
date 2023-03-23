import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.css']
})
export class ViewResourcesComponent implements OnInit {

  public panelOpenState: boolean = false;

  public loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
