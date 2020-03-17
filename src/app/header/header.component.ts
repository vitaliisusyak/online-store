import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';
import {AuthService} from '../pages/auth/auth.service';
import {UserProductsService} from '@shared/services/user-products.service';
import {switchMap} from 'rxjs/operators';
import {IProduct} from '@shared/interfaces/product-interface';

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
      } else {
        this.currentUser = null;
      }
    });
    // Get count of products in bag
    this.productsService.productsInBasket$
      .pipe(
        switchMap(() => {
          return this.productsService.getUserProductsBasket();
        })
      ).subscribe((productsBasket: IProduct[]) => {
      this.productsInBasketCounter = productsBasket.length;
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
