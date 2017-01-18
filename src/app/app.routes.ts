import { Routes } from '@angular/router';
import { SplashScreenComponent } from './views/splash-screen-component/splash-screen.component';
import { JeopardyComponent } from './views/jeopardy/jeopardy.component';
import { PickFourComponent } from './views/pick-four/pick-four.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash/start',
    pathMatch: 'full'
  },
  {
    path: 'splash/:name',
    component: SplashScreenComponent
  },
  {
    path: 'jeopardy/:name',
    component: JeopardyComponent
  },
  {
    path: 'pick-four/:name',
    component: PickFourComponent
  }
];
