import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseAuth: AngularFireAuth) { }

  async LogIn(email, password) {
    const user = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
    return user;
  }

  async Register(email, password){
    const user = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
    return user;
  }



  async LogOut() {
    try {
      await this.firebaseAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    return this.firebaseAuth.authState.pipe(first()).toPromise();
  }

}
