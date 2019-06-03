import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css']
})
export class CustomTextComponent implements OnInit {

  constructor() { }

  @Input() text: string;
  @Input() fontSize: number;

  ngOnInit() {
  }

}
