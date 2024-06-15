import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { CustomUser } from '../interfaz/custom-user';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private router: Router,
    private db: AngularFireDatabase
  ) {}

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      const user = result.user;

      if (result.additionalUserInfo?.isNewUser) {
        console.log('Nuevo usuario');
      } else {
        console.log('Usuario existente');
      }

      this.router.navigate(['/dashboard']);
    } catch (error: any) {
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
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error(error);
      await this.showAlert('Error', error.message || 'Ocurrió un error al iniciar sesión');
    }
  }

  getUser(): Observable<CustomUser | null> {
    return this.afAuth.authState as Observable<CustomUser | null>;
  }

  async getUserRole(uid: string): Promise<string | null> {
    try {
      const snapshot = await this.db.object(`users/${uid}/role`).query.once('value');
      return snapshot.val();
    } catch (error) {
      console.error('Error retrieving user role:', error);
      return null;
    }
  }
}
