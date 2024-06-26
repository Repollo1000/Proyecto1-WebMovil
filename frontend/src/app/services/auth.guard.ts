import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    const expectedRole = route.data['expectedRole'];

    if (currentUser && currentUser.token) {
      if (expectedRole && currentUser.role !== expectedRole) {
        // Si el usuario no tiene el rol esperado, redirigir al dashboard
        this.router.navigate(['/dashboard']);
        return false;
      }
      // El usuario está autenticado y tiene el rol correcto, permitir el acceso
      return true;
    }
    
    // El usuario no está autenticado, redirigir a la página de inicio de sesión
    this.router.navigate(['/inicio-sesion']);
    return false;
  }
}
