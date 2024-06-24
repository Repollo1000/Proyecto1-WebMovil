import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(
    private estadoService: EstadoService,
    private toastController: ToastController
  ) {}

  async cambiarEstado(estado: string) {
    try {
      const response = await firstValueFrom(this.estadoService.cambiarEstado(estado));
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
