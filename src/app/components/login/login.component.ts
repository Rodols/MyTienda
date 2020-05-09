import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();

  constructor(private auth: AuthService) { 
  }



  ngOnInit(): void {
  }

  LogIn(){
    //console.log(this.user.email + " - " + this.user.password);
    this.auth.LogIn(this.user.email,this.user.password);
  }
 
}
