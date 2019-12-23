import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class LoginService {
  constructor(private http: HttpClient) {}
private jsonUrl = '/test';

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.jsonUrl, {
      email,
      password
    });
  }
}
