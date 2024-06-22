import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-preguntas',
  templateUrl: './chat-preguntas.page.html',
  styleUrls: ['./chat-preguntas.page.scss'],
})
export class ChatPreguntasPage implements OnInit {
 
  conversacion: any;

  constructor(private estadoService: EstadoService, private toastController: ToastController,private http: HttpClient) {}

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
    this.obtenerConversacion();
  }

  obtenerConversacion() {
    this.http.get<any>('http://localhost:3000/obtener_chat_deportivo')
      .subscribe(data => {
        this.conversacion = data.conversacion;
      }, error => {
        console.error('Error al obtener la conversación:', error);
      });
  }
}
