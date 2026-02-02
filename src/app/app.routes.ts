import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Moon River',
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainComponent),
  },
];
