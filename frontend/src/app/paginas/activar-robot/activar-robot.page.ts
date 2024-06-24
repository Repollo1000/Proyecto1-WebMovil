import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-activar-robot',
  templateUrl: './activar-robot.page.html',
  styleUrls: ['./activar-robot.page.scss'],
})
export class ActivarRobotPage implements OnInit {

  constructor(private estadoService: EstadoService, private toastController: ToastController) {}

  async cambiarEstado(estado: string) {
    try {
      const response = await this.estadoService.cambiarEstado(estado).toPromise();
      if (response && response.message) {
        this.presentToast(response.message);
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
  ngOnInit() {
  }
}
