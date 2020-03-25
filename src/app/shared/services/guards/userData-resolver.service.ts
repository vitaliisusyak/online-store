import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserProfileService } from 'app/pages/user/user-profile/user-profile.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class UserDataResolver implements Resolve<any> {
  constructor(private userProfileService: UserProfileService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userProfileService.getUserData()
  }
}