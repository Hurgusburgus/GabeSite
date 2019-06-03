import { Component, OnInit } from '@angular/core';
import { Resume, gabeResume } from './resume.models';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor() { }


  ngOnInit() {
    this.resume = gabeResume;
  }

}
