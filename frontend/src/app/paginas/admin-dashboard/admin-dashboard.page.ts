import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  userCount: number = 0;
  lastUser: string = '';
  currentState: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loadUserCount();
    this.loadLastUser();
    this.loadCurrentState();
  }

  loadUserCount() {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    this.http.get<any>('http://localhost:3000/user-count', { headers }).subscribe(
      data => {
        this.userCount = data.user_count;
      },
      error => {
        console.error('Error fetching user count', error);
      }
    );
  }

  loadLastUser() {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    this.http.get<any>('http://localhost:3000/last-user', { headers }).subscribe(
      data => {
        this.lastUser = data.last_user;
      },
      error => {
        console.error('Error fetching last user', error);
      }
    );
  }

  loadCurrentState() {
    this.http.get<any>('http://localhost:3000/obtener_estado').subscribe(
      data => {
        this.currentState = data.estado;
      },
      error => {
        console.error('Error fetching current state', error);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        console.log('Sesión cerrada correctamente');
        this.router.navigate(['/inicio-sesion']);
      },
      error => {
        console.error('Error al intentar cerrar sesión', error);
      }
    );
  }
}
