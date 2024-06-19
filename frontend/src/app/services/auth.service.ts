import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private apiUrl = 'http://localhost:3000'; // Asegúrate de que esta URL es correcta

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Método de inicio de sesión
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(map(user => {
        // Almacenar los detalles del usuario y el token jwt en el local storage
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  // Método de registro
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save-user`, user);
  }

  // Método de cierre de sesión
  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {})
      .pipe(
        map(response => {
          // Limpiar el almacenamiento local al cerrar sesión
          localStorage.removeItem('currentUser');
          return response;
        })
      );
  }
}
