import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const valid = regex.test(control.value);

      return valid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl): ValidationErrors | null  {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
      return { NoPasswordMatch: true };
    } else {
      return null;
    }
  }

  static newPasswordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const currentPassword: string = control.get('oldPassword').value;
    const newPassword: string = control.get('password').value;

    if (currentPassword === newPassword) {
      control.get('password').setErrors({ samePassword: true });
      return { samePassword: true };
    } else {
      return null;
    }
  }
}
