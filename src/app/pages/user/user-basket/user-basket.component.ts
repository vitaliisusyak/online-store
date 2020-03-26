import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserProductsService } from '@shared/services/user-products.service';
import { IProduct } from '@shared/interfaces/product-interface';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'price', 'amount', 'remove'];
  private userProducts: IProduct[];
  private updateUserBasket = new BehaviorSubject(null);
  private totalPrice: number;
  private isEmpty: boolean;
  private showSpinner = false;

  constructor(private userProductsService: UserProductsService) {
  }

  ngOnInit() {
    this.showSpinner = true;
    this.updateUserBasket
      .pipe(
        switchMap(value => {
          return this.userProductsService.getUserProductsBasket();
        })
      )
      .subscribe(
        (userProductsBasket: IProduct[]) => {
          this.showSpinner = false;
          userProductsBasket.length === 0 ? this.isEmpty = true : this.isEmpty = false;
          this.userProducts = userProductsBasket;
          this.totalPrice = this.userProducts
            .map(product => +product.price * product.amount)
            .reduce((acc, value) => acc + value, 0);
        }
      );
  }

  removeItemFromBasket(id: number, name: string) {
    this.userProductsService.removeUserProductFromBasket(id, name).subscribe(
      updatedBasket => {
        this.updateUserBasket.next(updatedBasket);
      }
    );
  }

  incrementAmountOfProducts(product: IProduct) {
    product.amount++;
    this.userProductsService.changeProductQuantity(product).subscribe(
      updatedBasket => {
        this.updateUserBasket.next(updatedBasket);
      }
    );
  }

  decrementAmountOfProducts(product: IProduct) {
    if (product.amount < 2) {
      return;
    }
    product.amount--;
    this.userProductsService.changeProductQuantity(product).subscribe(
      updatedBasket => {
        this.updateUserBasket.next(updatedBasket);
      }
    );
  }
}
