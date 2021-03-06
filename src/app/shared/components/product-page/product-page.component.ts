import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {UserProductsService} from '@shared/services/user-products.service';
import {ProductService} from '@shared/services/product.service';
import {IProduct} from '@shared/interfaces/product-interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  private id: string;
  private requestUrl: string;
  private product: IProduct;
  private messageSuccess = "Product has been added to your bag";
  private messageError = "The product has already been added to the cart. Check your bag, please."

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private usersService: UserProductsService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    [this.requestUrl, this.id] = this.router.url.split('/').filter(item => item);
    this.productService.getProductById(this.requestUrl, this.id)
      .pipe(
        catchError(err => {
          this.router.navigate(['../../page-not-found'], {relativeTo: this.route});
          return throwError(err);
        })
      )
      .subscribe(product => this.product = product);
  }

  addProductToBasket(product: IProduct) {
    return this.usersService.addProductToBasket(product)
      .subscribe(
        data => {
          const config = new MatSnackBarConfig();
          config.duration = 1000;
          config.panelClass = ['snack-class'];
          this.snackBar.open(this.messageSuccess, '', config);
        },
        error => {
          const config = new MatSnackBarConfig();
          config.duration = 4000;
          config.panelClass = ['snack-class', 'snack-class-error'];
          this.snackBar.open(this.messageError, '', config);
        }
      );
  }
}
