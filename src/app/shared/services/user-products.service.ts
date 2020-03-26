import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../../pages/auth/auth.service';
import { Router } from '@angular/router';
import { IProduct } from '@shared/interfaces/product-interface';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserProductsService {
  private currentUserId: number;
  private addProductsToBasketUrl = 'addProducts';
  private getUserProductsBasketUrl = 'getProducts';
  private removeUserProductFromBasketUrl = 'removeProduct';
  private changeProductQuantityUrl = 'changeProductQuantity';

  public productsCounter = 0;
  public productsInBasket$ = new BehaviorSubject(this.productsCounter);

  constructor(private authService: AuthService,
              private http: HttpClient,
              private router: Router) { }

  checkUserId() {
    return this.authService.currentUserSubject.subscribe(user => user ? this.currentUserId = +user.id : null);
  }

  addProductToBasket(product: IProduct) {
    this.checkUserId();
    if (this.currentUserId) {
      return this.http.post(this.addProductsToBasketUrl, {
        product,
        userId: this.currentUserId
      })
        .pipe(
          tap(() => {
            this.productsCounter++;
            this.productsInBasket$.next(this.productsCounter);
          })
        );
    } else {
      this.router.navigate(['auth']);
    }
  }

  getUserProductsBasket() {
    this.checkUserId();
    return this.http.get(this.getUserProductsBasketUrl, {
      headers: new HttpHeaders({
        userId: this.currentUserId.toString()
      })
    });
  }

  removeUserProductFromBasket(id: number, name: string) {
    this.checkUserId();
    return this.http.delete(this.removeUserProductFromBasketUrl, {
      headers: new HttpHeaders({
        userId: this.currentUserId.toString(),
        productId: id.toString(),
        productName: name
      })
    })
      .pipe(
        tap(() => {
          this.productsCounter--;
          this.productsInBasket$.next(this.productsCounter);
        })
      );
  }

  changeProductQuantity(product) {
    this.checkUserId();
    return this.http.put(this.changeProductQuantityUrl, {
      product,
      userId: this.currentUserId
      },
    ).pipe(
      tap(() => {
        this.productsInBasket$.next(this.productsCounter);
      })
    );
  }

}
