import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {

  @ViewChild('container') container: ElementRef;
  @Input() value: string = '';
  @Input() question: String = 'No question';
  @Input() flipped: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.flipped = !this.flipped;
  }

}
