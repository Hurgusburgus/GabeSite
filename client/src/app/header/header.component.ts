import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentPage: string;

  constructor(private router: Router, private location: Location) { 
      router.events.subscribe((event) => {
        (event instanceof NavigationEnd) && this.handleRouteCHange()
      });
   }

  ngOnInit() {
    this.currentPage = this.location.path();
  }

  handleRouteCHange() {
    this.currentPage = this.location.path();
  }

  collapse() {

  }

}
