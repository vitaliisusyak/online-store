import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { CustomValidators } from '@shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  public frmSignUp: FormGroup;
  public frmLogin: FormGroup;
  isLogInMode = false;
  hide: true;
  hideCheck: true;
  hideLogin: true;

  constructor(private authService: AuthService, private cd: ChangeDetectorRef, private router: Router, private fb: FormBuilder) {
    this.frmSignUp = this.createSignUpForm();
    this.frmLogin = this.createLoginForm();
  }

  createSignUpForm(): FormGroup {
    return this.fb.group({
      name: [
        null,
        Validators.required
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        null,
        [
          Validators.required,
          CustomValidators.patternValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
            hasError: true
          })
        ]
      ],
      confirmPassword: [
        null,
        Validators.required
      ]
    },
      {
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  createLoginForm(): FormGroup {
    return this.fb.group({
        email: [
          null,
          [
            Validators.required,
            Validators.email
          ]
        ],
        password: [
          null,
          Validators.required,
        ],
      },
    );
  }

/*  signUpForm: FormGroup;*/


  ngOnInit() {
  }

  onSwitchMode() {
    this.isLogInMode = !this.isLogInMode;
    this.frmLogin.reset();
    this.frmSignUp.reset();
  }

  logIn() {
    const email = this.frmLogin.value.email;
    const password = this.frmLogin.value.password;

    this.authService.login(email, password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      });
    this.frmLogin.reset();
    console.log(this.frmLogin.value);
  }

  signUp() {
    const name = this.frmSignUp.value.name;
    const email = this.frmSignUp.value.email;
    const password = this.frmSignUp.value.password;

    this.authService.signup(name, email, password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      });
    this.frmSignUp.reset();
    console.log(this.frmSignUp.value);
  }
}


