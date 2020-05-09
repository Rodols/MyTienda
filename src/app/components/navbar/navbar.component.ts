import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public login:boolean = true;
  faSearch = faSearch;
  faAngleDown = faAngleDown;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.auth.LogOut();
  }

}
