import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-our-best',
  templateUrl: './our-best.component.html',
  styleUrls: ['./our-best.component.css']
})
export class OurBestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
