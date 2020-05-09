import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
user = new User();
  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  Register(){
    this.auth.Register(this.user.email, this.user.password).then(user=>{
      if(user){
        this.router.navigate(['/home']);
      }
    });
  }
}
