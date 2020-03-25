import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from 'app/pages/auth/auth.service';


@Injectable()

export class UserProfileService {

  private getUserDataUrl = 'userData';
  private editUserInfoUrl = 'editUserInfo';
  private changeUserPasswordUrl = 'changeUserPassword';
  private currentUserId: number;
  public changedUserInfo = new Subject();


  constructor(private http: HttpClient,
              private authService: AuthService) { }

  checkUserId() {
    return this.authService.currentUserSubject.subscribe(user => user ? this.currentUserId = +user.id : null);
  }

  getUserData() {
    this.checkUserId();
    return this.http.get(this.getUserDataUrl, {
      headers: new HttpHeaders({
        userId: this.currentUserId.toString()
      })
    }).pipe(
      tap(userData => this.changedUserInfo.next(userData))
    );
  }

  editUserInfo(name: string, email: string) {
    this.checkUserId();
    return this.http.put(this.editUserInfoUrl, {
      name,
      email,
      userId: this.currentUserId.toString()
    })
  }

  changeUserPassword(password: string) {
    this.checkUserId();
    return this.http.put(this.changeUserPasswordUrl, {
      password,
      userId: this.currentUserId.toString()
    });
  }

}
