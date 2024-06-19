import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.currentUserValue) {
      // El usuario está autenticado, permitir el acceso
      return true;
    } else {
      // El usuario no está autenticado, redirigir a la página de inicio de sesión
      this.router.navigate(['/inicio-sesion']);
      return false;
    }
  }
}