import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css'],
  providers:[AuthService]
})
export class RecuperarPasswordComponent implements OnInit {
email:string ="";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async SendEmailRecoveryPassword(){
    try {
      this.auth.resetPassword(this.email);
      this.router.navigate(['home']);
    } catch (error) {
      console.log(error);
    }
  }
  
}
