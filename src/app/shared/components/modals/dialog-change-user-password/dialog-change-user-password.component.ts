import {Component, EventEmitter, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordAsyncValidator, CustomValidators } from '@shared/services';
import { UserProfileService } from '../../../../pages/user/user-profile/user-profile.service';

@Component({
  selector: 'app-dialog-change-user-password',
  templateUrl: './dialog-change-user-password.component.html',
  styleUrls: ['./dialog-change-user-password.component.css', '../dialog-edit-user-info/dialog-edit-user-info.component.css']
})
export class DialogChangeUserPasswordComponent implements OnInit {
  private changeUserPasswordForm: FormGroup;
  hideOldPassword = true;
  hideNewPassword = true;
  hideConfirmNewPassword = true;
  public onChangePasswordEvent = new EventEmitter();

  constructor(public userProfileService: UserProfileService) {}

  ngOnInit() {
    this.changeUserPasswordForm = new FormGroup({
      oldPassword: new FormControl('', {
        validators: Validators.required,
        asyncValidators: PasswordAsyncValidator.createValidator(this.userProfileService),
        updateOn: 'blur'
      }),
      password: new FormControl('', [
        Validators.required,
        CustomValidators.patternValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        invalidPassword: true
        })
      ]),
      confirmPassword: new FormControl('', Validators.required)
    },
      [CustomValidators.newPasswordMatchValidator,
      CustomValidators.passwordMatchValidator]
    );
  }

  onChangePassword(form: FormGroup) {
      this.userProfileService.changeUserPassword(form.value.password).subscribe(data => {
        this.onChangePasswordEvent.emit(data);
      });
  }

}
