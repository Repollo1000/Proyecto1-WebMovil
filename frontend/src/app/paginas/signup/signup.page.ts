import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  selectedRegion: string = '';
  selectedComuna: string = '';
  comunas: string[] = [];
  username: string = '';
  email: string = '';
  rut: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;

  regionsAndComunas: { [key: string]: string[] } = {
    'Arica y Parinacota': ['Arica', 'Camarones'],
    'Tarapaca': ['Iquique', 'Alto Hospicio'],
    'Antofagasta': ['Antofagasta', 'Mejillones'],
    'Atacama': ['Copiapo', 'Caldera'],
    'Coquimbo': ['La Serena', 'Coquimbo'],
    'Valparaiso': ['Valparaiso', 'Viña del Mar'],
    'Metropolitana': ['Santiago', 'Puente Alto'],
    'O\'Higgins': ['Rancagua', 'Machali'],
    'Del Maule': ['Talca', 'Curico'],
    'Ñuble': ['Chillan', 'Bulnes'],
    'Bio Bio': ['Concepcion', 'Talcahuano'],
    'Araucania': ['Temuco', 'Padre Las Casas'],
    'Los Rios': ['Valdivia', 'Panguipulli'],
    'Los Lagos': ['Puerto Montt', 'Osorno'],
    'Aysen': ['Coyhaique', 'Puerto Aysen'],
    'Magallanes': ['Punta Arenas', 'Puerto Natales']
  };

  constructor(private alertController: AlertController, private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  updateComunas(event: any) {
    this.selectedRegion = event.detail.value;
    this.comunas = this.regionsAndComunas[this.selectedRegion] || [];
  }

  async register() {
    if (!this.username || !this.email || !this.rut || !this.selectedRegion || !this.selectedComuna || !this.password || !this.confirmPassword) {
      await this.showAlert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (!this.isValidEmail(this.email)) {
      await this.showAlert('Error', 'El correo electrónico no es válido.');
      return;
    }

    if (this.password.length < 7) {
      await this.showAlert('Error', 'La contraseña debe tener más de 6 caracteres.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      await this.showAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    if (!this.acceptTerms) {
      await this.showAlert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }

    const newUser = {
      username: this.username,
      email: this.email,
      rut: this.rut,
      region: this.selectedRegion,
      comuna: this.selectedComuna,
      password: this.password
    };

    this.authService.register(newUser).subscribe(
      response => {
        // Redirigir al dashboard después de un registro exitoso
        this.router.navigate(['/dashboard']);  // Asegúrate de que la ruta sea correcta
      },
      async error => {
        await this.showAlert('Error', error.error.message || 'Ocurrió un error al procesar la solicitud');
      }
    );
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
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
