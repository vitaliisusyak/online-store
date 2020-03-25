import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserProfileService } from 'app/pages/user/user-profile/user-profile.service';

@Component({
  selector: 'app-dialog-edit-user-info',
  templateUrl: './dialog-edit-user-info.component.html',
  styleUrls: ['./dialog-edit-user-info.component.css']
})
export class DialogEditUserInfoComponent implements OnInit {
  public editUserInfoGroup: FormGroup;
  public onEditInfoEvent = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, email: string},
              private userProfileService: UserProfileService) { }

  ngOnInit() {
     this.editUserInfoGroup = new FormGroup({
       editUserName: new FormControl(this.data.name, [Validators.required,
        Validators.minLength(3)]),
       editUserEmail: new FormControl(this.data.email, [Validators.required, Validators.email])
     });
  }

  onEditInfo(form: FormGroup) {
    if (form.value.editUserName === this.data.name && form.value.editUserEmail === this.data.email) {
      return;
    } else {
      this.userProfileService.editUserInfo(form.value.editUserName, form.value.editUserEmail).subscribe(data => {
        this.onEditInfoEvent.emit(data);
      });
    }
  }

}
