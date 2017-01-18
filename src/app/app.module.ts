import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './views/splash-screen-component/splash-screen.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { ScoreCounterComponent } from './components/score-counter/score-counter.component';
import { JeopardyComponent } from './views/jeopardy/jeopardy.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PickFourComponent } from './views/pick-four/pick-four.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    FlipCardComponent,
    ScoreCounterComponent,
    JeopardyComponent,
    PickFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
