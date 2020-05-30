import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
public user$: Observable<any>= this.auth.firebaseAuth.user;;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  SendEmail(){
    this.auth.sendVerificationEmail();
  }

}
