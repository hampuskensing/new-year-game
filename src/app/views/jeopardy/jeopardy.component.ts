import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-jeopardy',
  templateUrl: './jeopardy.component.html',
  styleUrls: ['./jeopardy.component.css']
})
export class JeopardyComponent implements OnInit {

  name: string;
  game: { category: string, questions: string[] }[];

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.name = params['name']
      this.http.get('app/questions/jeopardy.json').toPromise().then((response: Response) => {
        const responseBody = response.json();
        this.game = responseBody[this.name];
      }, (error: Error) => {
        console.error(error);
      });
    });
  }

}
