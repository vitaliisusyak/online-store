import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthService } from './auth.service';
import { CustomValidators } from '@shared/services';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  public frmSignUp: FormGroup;
  public frmLogin: FormGroup;

  isLogInMode = true;

  hide = true;
  hideCheck = true;
  hideLogin = true;

  errorUpdate = new BehaviorSubject(null);

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router) {
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

  ngOnInit() {
    this.frmSignUp = this.createSignUpForm();
    this.frmLogin = this.createLoginForm();
    this.cd.markForCheck();
  }

  onSwitchMode() {
    this.isLogInMode = !this.isLogInMode;
    this.frmLogin.reset();
    this.frmSignUp.reset();
    this.errorUpdate.next(null);
  }

  logIn() {
    const email = this.frmLogin.value.email;
    const password = this.frmLogin.value.password;

    this.authService.login(email, password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        this.errorUpdate.next(error.error.message);
      });
  }

  signUp() {
    const name = this.frmSignUp.value.name;
    const email = this.frmSignUp.value.email;
    const password = this.frmSignUp.value.password;

    this.authService.signup(name, email, password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        this.errorUpdate.next(error.error.message);
      });
  }
}


