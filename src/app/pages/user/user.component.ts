import { Component, OnInit } from '@angular/core';

import {UserProductsService} from "@shared/services/user-products.service";
import {BehaviorSubject, Subject} from "rxjs";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userProducts;
  private updateUserBasket = new BehaviorSubject(null);
  displayedColumns: string[] = ['image', 'name', 'price', 'remove'];
  private totalPrice: number;

  constructor(private userProductsService: UserProductsService) {}

  ngOnInit() {
    this.updateUserBasket
      .pipe(
        switchMap(value => {
          return this.userProductsService.getUserProductsBasket()
        })
      ).subscribe(
        data => {
          this.userProducts = data;
          this.totalPrice = this.userProducts
            .map(product => product.price)
            .reduce((acc, value) => acc + value, 0)
          console.log(this.userProducts);
          console.log(this.totalPrice);
        }
    );
    console.log(this.userProducts);
    console.log(this.totalPrice);
  }

  getTotalCost() {
    return this.userProducts
      .map(product => product.price)
      .reduce((acc, value) => acc + value, 0)
  }

  removeItemFromBasket(id: number) {
    this.userProductsService.removeUserProductFromBasket(id).subscribe(
      data => {
        this.updateUserBasket.next(data);
        console.log(data)}
    )
  }
}
