import { Component, OnInit } from '@angular/core';
import { Technology, GabeTech } from '../about-site/about-site.models';

@Component({
  selector: 'app-about-gabe',
  templateUrl: './about-gabe.component.html',
  styleUrls: ['./about-gabe.component.css']
})
export class AboutGabeComponent implements OnInit {

  technologies : Technology[];

  constructor() { }

  ngOnInit() {
    
  }

}
