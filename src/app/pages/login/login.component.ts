import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  email: string;
  password: any;
  ngOnInit() {
  }

  authenticate(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.login(email, password).subscribe(data => {
      console.log(data);
    });
  }
}


