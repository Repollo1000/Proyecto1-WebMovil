import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomUser } from '../interfaz/custom-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private router: Router
  ) { }

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      const user = result.user;
      
      // Verifica si result.additionalUserInfo no es null ni undefined antes de acceder a sus propiedades
      if (result.additionalUserInfo?.isNewUser) {
        // Usuario nuevo
        // Realiza las acciones necesarias para un nuevo usuario
        console.log('Nuevo usuario');
      } else {
        // Usuario existente
        // Realiza las acciones necesarias para un usuario existente
        console.log('Usuario existente');
      }

      // Redirige al usuario a otra página después del inicio de sesión exitoso
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      // Maneja los errores aquí
      console.error(error);
      await this.showAlert('Error', error.message || 'Ocurrió un error al iniciar sesión');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async signInWithEmail(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario al dashboard
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error(error);
      await this.showAlert('Error', error.message || 'Ocurrió un error al iniciar sesión');
    }
  }

  // Método para obtener el usuario actual
  getUser(): Observable<CustomUser | null> {
    return this.afAuth.authState.pipe(
      map(user => {
        if (user) {
          return user as CustomUser;
        } else {
          return null;
        }
      })
    );
  }
}
