import { Component, OnInit } from '@angular/core';

import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public  authService:  AuthService) { }

  ngOnInit() {
  }

}
