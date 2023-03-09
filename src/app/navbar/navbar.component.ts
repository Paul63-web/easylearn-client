import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.transparentNav();
  }

  transparentNav() {
    const navEl = document.querySelector('.navbar');
    window.addEventListener('scroll', ()=> {
      if (window.scrollY >= 56) {
        navEl.classList.add('solid-nav');
      }else if(window.scrollY < 56) {
        navEl.classList.remove('solid-nav');
      }
    })
  }

}
