import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-pick-four',
  templateUrl: './pick-four.component.html',
  styleUrls: ['./pick-four.component.css']
})
export class PickFourComponent implements OnInit {

  name: string;
  game: { category: string, questions: string[] }[];

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.name = params['name'];
      this.http.get('app/questions/pick-four.json').toPromise().then((response: Response) => {
        const responseBody = response.json();
        this.game = responseBody[this.name];
      }, (error: Error) => {
        console.error(error);
      });
    });
  }

}
