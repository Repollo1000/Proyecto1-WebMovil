import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Verificar si el correo electrónico es válido
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Ingrese un correo electrónico válido.';
      return;
    }

    // Verificar si la contraseña tiene al menos 6 caracteres
    if (this.password.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    // Si pasa las verificaciones, navegar a la página de inicio
    this.router.navigate(['/info']);
  }

  // Función para verificar si el correo electrónico es válido
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
