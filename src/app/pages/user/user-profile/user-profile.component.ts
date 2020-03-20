import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
  }
}
