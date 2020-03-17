import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {Subscription} from 'rxjs';
import { AuthService } from '../pages/auth/auth.service';
import {UserProductsService} from '@shared/services/user-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  private currentUser;
  private currentUserSubscription: Subscription;
  private productsInBasketCounter: number;
  private productsInBasketSubscription: Subscription;

  constructor(private authService: AuthService,
              private productsService: UserProductsService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.authService.afterLogin();
    this.currentUserSubscription = this.authService.currentUserSubject.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.productsInBasketCounter = 1;
      } else {
        this.currentUser = null;
      }
    });
    // Products in basket counter
    this.productsInBasketSubscription = this.productsService.productsInBasket$.subscribe(counter => {
      this.productsInBasketCounter = counter;
      this.cd.markForCheck();
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
