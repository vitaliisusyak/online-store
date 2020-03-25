import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { UserProfileService } from './user-profile.service';
import { User } from '../../auth/user.model';
import { DialogEditUserInfoComponent } from '@shared/components';
import { DialogChangeUserPasswordComponent } from '@shared/components';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private userData: User;
  private infoChanged = new Subject();
  private infoChangedSup: Subscription;

  constructor(private authService: AuthService,
              private userProfileService: UserProfileService,
              private cd: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.infoChangedSup = this.infoChanged.subscribe((data: User) => {
      this.userData = data;
      this.cd.markForCheck();
    });

    this.route.data
    .subscribe((data: Data) => {
      this.userData = data.userData;
    });

  }

  logOut() {
    this.authService.logOut();
  }

  onEditInfo() {
    const dialogRef = this.dialog.open(DialogEditUserInfoComponent, {
      width: '450px',
      data: { name: this.userData.name, email: this.userData.email }
    });
    const sub = dialogRef.componentInstance.onEditInfoEvent.subscribe((data) => {
      this.infoChanged.next(data);
    });
  }

  onChangePassword() {
    const dialogRef = this.dialog.open(DialogChangeUserPasswordComponent, {
      width: '450px'
    });
    const sub = dialogRef.componentInstance.onChangePasswordEvent.subscribe((data) => {
      this.infoChanged.next(data);
    });
  }

  ngOnDestroy() {
    this.infoChangedSup.unsubscribe();
  }
}
