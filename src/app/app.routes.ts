import {Routes} from '@angular/router';

export const routes: Routes = [{
  path: '',
  title: 'Mail',
  loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
}];
