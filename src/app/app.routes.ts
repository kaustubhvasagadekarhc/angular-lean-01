import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { guestGuard } from './shared/guards/guest.guard';
import { dashboardRoutes, authRoutes } from './routes';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ...authRoutes.map(route => ({ ...route, canActivate: [guestGuard] })),
  ...dashboardRoutes.map(route => ({ ...route, canActivate: [authGuard] })),
];
