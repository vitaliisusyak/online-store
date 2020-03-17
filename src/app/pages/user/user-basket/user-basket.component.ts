import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {UserProductsService} from '@shared/services/user-products.service';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'price', 'remove'];
  private userProducts;
  private updateUserBasket = new BehaviorSubject(null);
  private totalPrice: number;

  constructor(private userProductsService: UserProductsService) {
  }

  ngOnInit() {
    this.updateUserBasket
      .pipe(
        switchMap(value => {
          return this.userProductsService.getUserProductsBasket();
        })
      ).subscribe(
      data => {
        this.userProducts = data;
        this.totalPrice = this.userProducts
          .map(product => product.price)
          .reduce((acc, value) => acc + value, 0);
      }
    );
  }

  removeItemFromBasket(id: number) {
    this.userProductsService.removeUserProductFromBasket(id).subscribe(
      data => {
        this.updateUserBasket.next(data);
        console.log(data);
      }
    );
  }
}
