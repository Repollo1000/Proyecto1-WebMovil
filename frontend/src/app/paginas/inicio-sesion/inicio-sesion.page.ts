import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  async signInWithEmail() {
    // Lógica para iniciar sesión con correo electrónico
    await this.authService.signInWithEmail(this.email, this.password);
  }

  async signInWithGoogle() {
    // Lógica para iniciar sesión con Google
    await this.authService.signInWithGoogle();
  }
}
