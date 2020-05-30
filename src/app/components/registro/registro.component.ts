import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Models/InterfaceUser';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
user: IUser = {};
  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  Register(){
    this.auth.Register(this.user).then(user=>{
      if(user){
        this.router.navigate(['/verificacion-correo']);
      }
    });
  }
}
