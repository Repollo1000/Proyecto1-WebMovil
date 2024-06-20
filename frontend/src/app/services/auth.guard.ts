import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.token) {
      return true; // Usuario autenticado, permitir acceso
    } else {
      this.router.navigate(['/inicio-sesion']); // Usuario no autenticado, redirigir a inicio de sesión
      return false;
    }
  }
}
