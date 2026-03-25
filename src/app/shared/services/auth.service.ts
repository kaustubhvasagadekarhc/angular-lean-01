import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Log } from '../decorators/log.decorator';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = signal(this.hasToken());

  isLoggedIn = this._isLoggedIn.asReadonly();

  constructor(private router: Router) {}

  private hasToken(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('auth_token');
  }

  @Log()
  login(email: string, password: string): boolean {
    localStorage.setItem('auth_token', 'demo-token');
    this._isLoggedIn.set(true);
    this.router.navigate(['/home']);
    return true;
  }

  @Log()
  logout(): void {
    localStorage.removeItem('auth_token');
    this._isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}
