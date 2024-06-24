import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  estadoActual: string = '';

  constructor(private estadoService: EstadoService, private toastController: ToastController) {}

  ngOnInit() {
    this.obtenerEstadoActual();
  }

  ionViewWillEnter() {
    this.obtenerEstadoActual();
  }

  async obtenerEstadoActual() {
    try {
      const response = await this.estadoService.obtenerEstado().toPromise();
      if (response && response.estado) {
        this.estadoActual = response.estado; // Asigna el estado actual
      }
    } catch (error) {
      console.error('Error al obtener el estado actual:', error);
      this.presentToast('Error al obtener el estado actual');
    }
  }

  async cambiarEstado(estado: string) {
    try {
      const response = await this.estadoService.cambiarEstado(estado).toPromise();
      if (response && response.message) {
        this.presentToast(response.message);
        this.obtenerEstadoActual(); // Actualiza el estado actual después de cambiarlo
      }
    } catch (error) {
      console.error('Error al cambiar el estado:', error);
      this.presentToast('Error al cambiar el estado');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
