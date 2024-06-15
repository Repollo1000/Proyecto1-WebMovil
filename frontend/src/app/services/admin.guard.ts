import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CustomUser } from '../interfaz/custom-user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      map((user: CustomUser | null) => {
        if (user && user.role === 'admin') {
          return true;
        } else {
          this.router.navigate(['/not-authorized']);
          return false;
        }
      })
    );
  }
}
