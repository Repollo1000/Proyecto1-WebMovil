import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ohbotinfo',
  templateUrl: './ohbotinfo.page.html',
  styleUrls: ['./ohbotinfo.page.scss'],
})
export class OhbotinfoPage implements OnInit {
  componentsData: any;

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/info').subscribe(data => { // Actualiza la URL para apuntar a la ruta correcta
      console.log(data); // Verifica si los datos se están recibiendo correctamente
      this.componentsData = data.components;
    });
  }
}
