import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from './user.model';

@Injectable()

export class AuthService {
  private loginJsonUrl = '/login';
  private signupJsonUrl = '/signup';
  userSub = new Subject<User>();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginJsonUrl,
      {
        email,
        password})
      .pipe(tap(resData => {
        this.handleAuthentication(resData.name, resData.email, resData.id, resData.token);
        })
      );
  }

  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.signupJsonUrl,
      {
        name,
        email,
        password})
      .pipe(tap(resData => {
          this.handleAuthentication(resData.name, resData.email, resData.id, resData.token);
        })
      );
  }
  private handleAuthentication(name: string, email: string, id: string, token: string) {
    const user = new User(name, email, id, token);
    this.userSub.next(user);
  }
}
