import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {tap} from 'rxjs/operators';

import {User} from './user.model';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  public currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  private loginJsonUrl = '/login';
  private signupJsonUrl = '/signup';

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {
  }

  afterLogin() {
    const loggedUser = localStorage.getItem('currentUser');
    if (loggedUser) {
      this.currentUserSubject.next(JSON.parse(loggedUser));
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginJsonUrl,
      {
        email,
        password
      })
      .pipe(tap(data => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          return this.currentUserSubject.next(data);
        },
        validationError => {
          throwError(validationError);
        })
      );
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  signup(name: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(this.signupJsonUrl,
      {
        name,
        email,
        password
      })
      .pipe(tap(resData => {
          localStorage.setItem('currentUser', JSON.stringify(resData));
        },
        validationError => {
          throwError(validationError);
        }));
  }
}
