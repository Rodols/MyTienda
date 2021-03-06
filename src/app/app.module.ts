import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    SendEmailComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
