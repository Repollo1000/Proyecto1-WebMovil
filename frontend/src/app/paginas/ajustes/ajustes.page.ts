import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'; // Importa HttpErrorResponse si no está importado

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {
  userProfile: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.getProfile().subscribe(
      (data: any) => {
        this.userProfile = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al cargar el perfil del usuario', error);
        // Manejar el error aquí
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        console.log('Sesión cerrada correctamente');
        this.router.navigate(['/inicio-sesion']); // Redirige a la página de inicio de sesión
      },
      (error: HttpErrorResponse) => {
        console.error('Error al intentar cerrar sesión', error);
        if (error.status === 401) {
          this.router.navigate(['/inicio-sesion']);
        } else {
          // Manejo genérico de otros errores
        }
      }
    );
  }
}
