import { Component, OnInit } from '@angular/core';
import { HomeSlide } from './home-slide';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  slides: HomeSlide[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHomeSlides().subscribe((response) => {
      debugger;
      this.slides = response;
    });
  }

}
