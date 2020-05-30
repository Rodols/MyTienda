import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async LogIn() {
    try {
      const user = await this.auth.LogIn(this.user.email, this.user.password);
      if (user && user.emailVerified) {
        this.router.navigate(['/home']);
      }else if(user){
        this.router.navigate(['/verificacion-correo']);
      }else{
        this.router.navigate(['/register']);
      }
    } catch (error) {
      console.log(error);
    }

  }

}
