import { Injectable } from '@angular/core';          
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor( private firebaseAuth: AngularFireAuth ) {
    this.user = firebaseAuth.authState;
   }

  LogIn(email, password){
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(user =>{
      console.log("funciono: ", user);
    })
    .catch(err =>{
      console.log("Error al logearse: ", err)
    });
  }

  LogOut(){
    this.firebaseAuth.signOut().then(()=>console.log("sesion cerrada"));
  }
 
}
