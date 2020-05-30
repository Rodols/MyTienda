import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUser } from '../Models/InterfaceUser';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<IUser>;

  constructor(public firebaseAuth: AngularFireAuth , private afs: AngularFirestore) {
   this.user$ = this.firebaseAuth.authState.pipe(
     switchMap( (user) =>{
       if (user) {
         return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
       } else {
         return of(null);
       }
     })
   )
   }

  async LogIn(email, password): Promise<IUser> {
    try {
      const {user} = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async Register(userRegister: IUser){
    try {
      const user = await this.firebaseAuth.createUserWithEmailAndPassword(userRegister.email, userRegister.password);
      this.sendVerificationEmail();
      if(user){
        userRegister.uid= user.user.uid;
        userRegister.emailVerified= user.user.emailVerified;
        userRegister.photoURL= user.user.photoURL;
        console.log(userRegister);
        this.updateUserData(userRegister); 
      }
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

  private updateUserData(user:IUser){
    const userRef : AngularFirestoreDocument<IUser>=
    this.afs.doc(`users/${user.uid}`);

    const data: IUser ={
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      direction: user.direction,
      photoURL: user.photoURL,
      role: 'CLIENTE'
    };
    return userRef.set(data, {merge: true});
  }

}
