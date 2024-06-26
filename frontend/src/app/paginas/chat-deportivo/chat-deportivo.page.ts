import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-deportivo',
  templateUrl: './chat-deportivo.page.html',
  styleUrls: ['./chat-deportivo.page.scss'],
})
export class ChatDeportivoPage implements OnInit {
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