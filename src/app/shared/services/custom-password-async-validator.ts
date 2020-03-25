import { AbstractControl } from '@angular/forms';

import { UserProfileService } from 'app/pages/user/user-profile/user-profile.service';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from 'app/pages/auth/user.model';

export class PasswordAsyncValidator {

  static createValidator(userProfileService: UserProfileService) {
    return (control: AbstractControl) => {
      return userProfileService.getUserData().pipe(
        map((res: User) => {
          return res.password === control.value ? null : { wrongPassword: true };
        },
          catchError(err => {
            return of(err);
          })
        ));
    };
  }
}
