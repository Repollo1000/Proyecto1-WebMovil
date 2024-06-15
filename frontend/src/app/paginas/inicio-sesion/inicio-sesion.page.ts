import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService // Agrega el AuthService al constructor
  ) { }

  ngOnInit() { }

  async login() {
    if (!this.email || !this.password) {
      await this.showAlert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    this.http.post('http://localhost:3000/login', { email: this.email, password: this.password }).subscribe(
      response => {
        // Redirigir al dashboard después de un inicio de sesión exitoso
        this.router.navigate(['/info']);
      },
      async error => {
        await this.showAlert('Error', error.error.message || 'Ocurrió un error al procesar la solicitud');
      }
    );
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async loginWithGoogle() {
    await this.authService.signInWithGoogle(); // Llama al método desde la instancia de AuthService
  }
}
