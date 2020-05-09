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
      if (user) {
        console.log("Biernvenido! ", user)
        this.router.navigate(['home']);
      }
    } catch (error) {
      console.log(error);
    }

  }

}
