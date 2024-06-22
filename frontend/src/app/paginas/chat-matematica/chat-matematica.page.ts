import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-matematica',
  templateUrl: './chat-matematica.page.html',
  styleUrls: ['./chat-matematica.page.scss'],
})
export class ChatMatematicaPage implements OnInit {

  conversacion: any[] = [];

  constructor(private http: HttpClient) {}

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
