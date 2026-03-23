import { Routes } from '@angular/router';
import { AuthorizedLayout, UnauthorizedLayout } from './shared/layouts';
import { authGuard } from './shared/guards/auth.guard';
import { guestGuard } from './shared/guards/guest.guard';
import { dashboardRoutes, authRoutes } from './routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthorizedLayout,
    canActivate: [authGuard],
    children: [
      ...dashboardRoutes,
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: UnauthorizedLayout,
    canActivate: [guestGuard],
    children: [
      ...authRoutes,
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
