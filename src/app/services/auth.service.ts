import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseAuth: AngularFireAuth) { }

  async LogIn(email, password) {
    try {
      const user = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async Register(email, password){
    try {
      const user = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail():Promise<void>{
    return (await this.firebaseAuth.currentUser).sendEmailVerification();
  }

  async resetPassword(email:string):Promise<void>{
    try {
      return this.firebaseAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error); 
    }
  }

  async LogOut() {
    try {
      await this.firebaseAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

}
