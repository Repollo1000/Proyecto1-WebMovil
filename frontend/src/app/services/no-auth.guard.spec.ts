import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.token) {
      // El usuario está autenticado, redirigir a la página correspondiente según su rol
      if (currentUser.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      return false;
    }
    // El usuario no está autenticado, permitir el acceso
    return true;
  }
}
