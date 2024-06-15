// custom-user.ts
import firebase from 'firebase/compat/app';

export interface CustomUser extends firebase.User {
  role: string; // Agrega otros campos personalizados si es necesario
}
