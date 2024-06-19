import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'; // Importa HttpErrorResponse si no está importado

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout().subscribe(
      () => {
        console.log('Sesión cerrada correctamente');
        // Redirige a la página de inicio de sesión u otra página según tu flujo de la aplicación
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => { // Especifica HttpErrorResponse para manejar errores de HTTP
        console.error('Error al intentar cerrar sesión', error);
        // Aquí puedes manejar el error según su tipo
        if (error.status === 401) {
          // Por ejemplo, si el servidor responde con un código 401 (Unauthorized)
          // Puedes redirigir a una página de inicio de sesión o mostrar un mensaje al usuario
          this.router.navigate(['/login']);
        } else {
          // Manejo genérico de otros errores
          // Puedes mostrar un mensaje de error al usuario
          // O redirigir a una página de error
        }
      }
    );
  }

}
