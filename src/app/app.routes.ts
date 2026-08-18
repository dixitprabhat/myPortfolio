import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/container/container.component').then(
        (m) => m.ContainerComponent
      ),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'leetcode',
    loadComponent: () =>
      import('./components/leetcode/leetcode-home/leetcode-home.component').then(
        (m) => m.LeetcodeHomeComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
