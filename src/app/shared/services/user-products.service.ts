import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {AuthService} from "../../pages/auth/auth.service";
import {Router} from "@angular/router";
import {IProduct} from "@shared/interfaces/product-interface";


@Injectable({
  providedIn: 'root'
})

export class UserProductsService {
  private currentUserName: string;
  private addProductsToBasketUrl = 'addProducts';
  private getUserProductsBasketUrl = 'getProducts';
  private removeUserProductFromBasketUrl = 'removeProduct';

  constructor(private authService: AuthService,
              private http: HttpClient,
              private router: Router) { }

  addProductToBasket(product: IProduct) {
    this.authService.currentUserSubject.subscribe(user => user ? this.currentUserName = user.name: null);
    if(this.currentUserName ) {
      return this.http.post(this.addProductsToBasketUrl, product, {
        headers: new HttpHeaders({
          'userBasketName': this.currentUserName
        })
      })
        .subscribe(data => console.log(data))
    } else {
      this.router.navigate(['auth'])
    }
  }

  getUserProductsBasket() {
    this.authService.currentUserSubject.subscribe(user => user ? this.currentUserName = user.name: null);
    return this.http.get(this.getUserProductsBasketUrl, {
      headers: new HttpHeaders({
        'userBasketName': this.currentUserName
      })
    })
  }

  removeUserProductFromBasket(id: number) {
    this.authService.currentUserSubject.subscribe(user => user ? this.currentUserName = user.name: null);
    return this.http.delete(this.removeUserProductFromBasketUrl, {
      headers: new HttpHeaders({
        'userBasketName': this.currentUserName,
        'productId': id.toString()
      })
    })
  }
}