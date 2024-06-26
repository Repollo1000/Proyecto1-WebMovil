import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private apiUrl = 'http://localhost:3000/save-user'; // URL del servidor Node.js

  constructor(private http: HttpClient) { }

  saveUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Sending user:', user);
    return this.http.post(this.apiUrl, user, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
