import { Component } from '@angular/core';

@Component({
  selector: 'score-counter',
  templateUrl: './score-counter.component.html',
  styleUrls: ['./score-counter.component.css']
})
export class ScoreCounterComponent {

  count = 0;

  addScore(delta: number) {
    this.count = this.count + delta;
    if (this.count < 0) {
      this.count = 0;
    }
  }

}
