import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-asesoramiento-emocional',
  templateUrl: './asesoramiento-emocional.page.html',
  styleUrls: ['./asesoramiento-emocional.page.scss'],
})
export class AsesoramientoEmocionalPage implements OnInit {

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
