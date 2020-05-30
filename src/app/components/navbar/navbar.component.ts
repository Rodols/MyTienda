import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../../Models/InterfaceUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user$: Observable<IUser>;
  faSearch = faSearch;
  faAngleDown = faAngleDown;

  constructor(public auth: AuthService, private router: Router) {
    this.user$ = auth.user$;
  }

  ngOnInit() {
  }


  async LogOut() {
    try {
      await this.auth.LogOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
