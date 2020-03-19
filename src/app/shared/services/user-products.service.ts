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
  private currentUserName: string;
  private addProductsToBasketUrl = 'addProducts';
  private getUserProductsBasketUrl = 'getProducts';
  private removeUserProductFromBasketUrl = 'removeProduct';
  private changeProductQuantityUrl = 'changeProductQuantity';

  public productsCounter = 0;
  public productsInBasket$ = new BehaviorSubject(this.productsCounter);

  constructor(private authService: AuthService,
    private http: HttpClient,
    private router: Router) { }

  checkUserName() {
    return this.authService.currentUserSubject.subscribe(user => user ? this.currentUserName = user.name : null);
  }

  addProductToBasket(product: IProduct) {
    this.checkUserName();
    if (this.currentUserName) {
      return this.http.post(this.addProductsToBasketUrl, product, {
        headers: new HttpHeaders({
          userBasketName: this.currentUserName
        })
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
    this.checkUserName();
    return this.http.get(this.getUserProductsBasketUrl, {
      headers: new HttpHeaders({
        userBasketName: this.currentUserName
      })
    });
  }

  removeUserProductFromBasket(id: number, name: string) {
    this.checkUserName();
    return this.http.delete(this.removeUserProductFromBasketUrl, {
      headers: new HttpHeaders({
        userBasketName: this.currentUserName,
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
    this.checkUserName();
    return this.http.put(this.changeProductQuantityUrl, product,
    {
      headers: new HttpHeaders({
        userBasketName: this.currentUserName,
        productId: product.id.toString(),
        productName: product.name
      })
    }).pipe(
      tap(() => {
        this.productsInBasket$.next(this.productsCounter);
      })
    );
  }

  
}
