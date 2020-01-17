import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()

export class AuthService {
  private loginJsonUrl = '/login';
  private signupJsonUrl = '/signup';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginJsonUrl,
      {
        email,
        password});
  }

  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.signupJsonUrl,
      {
        name,
        email,
        password});
  }
}
