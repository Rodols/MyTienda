import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IterfaceUser } from '../../Models/InterfaceUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  user$: Observable<IterfaceUser> = this.auth.firebaseAuth.user;
  faSearch = faSearch;
  faAngleDown = faAngleDown;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.auth.getCurrentUser().then(user => console.log(user))
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
