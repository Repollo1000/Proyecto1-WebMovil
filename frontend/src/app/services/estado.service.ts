import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private serverUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  cambiarEstado(estado: string) {
    return this.http.post<any>(`${this.serverUrl}/cambiar_estado`, { estado });
  }

  obtenerEstado() {
    return this.http.get<any>(`${this.serverUrl}/obtener_estado`);
  }

}
