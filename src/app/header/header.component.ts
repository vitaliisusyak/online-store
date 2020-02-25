import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {Subscription} from 'rxjs';
import { AuthService } from '../pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  private currentUser;
  private currentUserSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.authService.afterLogin();
    const currentUserSubscription = this.authService.currentUserSubject.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  logOut() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

}
