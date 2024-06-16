import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private alertController: AlertController, private http: HttpClient, private router: Router) { }

  ngOnInit() { }

  async login() {
    if (!this.email || !this.password) {
      await this.showAlert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    this.http.post('http://localhost:3000/login', { email: this.email, password: this.password }).subscribe(
      (response: any) => {
        // Almacenar el token en el localStorage
        localStorage.setItem('token', response.token);
        // Redirigir basado en el rol del usuario
        if (response.role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
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
}
