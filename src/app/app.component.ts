import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages: string[] = [
    '/splash/start',
    '/pick-four/boat-words',
    '/jeopardy/2016-1',
    '/pick-four/moustache-styles',
    '/splash/end'
  ];

  current: number = 0;

  constructor(private router: Router) {

  }

  gotoPrevious() {
    this.current = this.pages.indexOf(this.router.url) - 1;
    if (this.current < 0) {
      this.current = 0;
    }
    this.router.navigate([this.pages[this.current]]);
  }

  gotoNext() {
    this.current = this.pages.indexOf(this.router.url) + 1;
    if (this.current > this.pages.length - 1) {
      this.current = this.pages.length - 1;
    }
    console.log(this.router.url);
    this.router.navigate([this.pages[this.current]]);
  }

}
