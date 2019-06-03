import { Injectable } from '@angular/core';
import { HomeSlide } from '../home/home-slide';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  homeSlides : HomeSlide[] = [
    {
      title: 'About this Site',
      subtitle: 'Built from the ground up. Check out the Stack!',
      href:'about-site',
      imgSrc: '../assets/images/developer.png',
      imgAlt: 'Second slide'
    },
    {
      title: 'About Gabe',
      subtitle: 'Learn more about me',
      href:'about-gabe',
      imgSrc: '../assets/images/gabe.png',
      imgAlt: 'First slide'
    },
    {
      title: 'Resume',
      subtitle: 'Read and download my resume',
      href:'resume',
      imgSrc: '../assets/images/resume.png',
      imgAlt: 'Third Slide'
    },
  ] 

  constructor() { }

  getHomeSlides (): Observable<HomeSlide[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.homeSlides);
      }, 1000); 
    });
  }

}
