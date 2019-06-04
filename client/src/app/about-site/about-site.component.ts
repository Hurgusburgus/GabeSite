import { Component, OnInit } from '@angular/core';
import { Technology, GabeTech } from './about-site.models';

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.css']
})
export class AboutSiteComponent implements OnInit {

  technologies : Technology[];

  constructor() { }

  ngOnInit() {
    this.technologies = GabeTech;
  }

}
