import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

import { ProductsComponent } from './products.component';
import { SearchPipe} from '@shared/pipes';
import { ProductPageComponent } from '@shared/components/product-page/product-page.component';
import {SpinnerModule} from '../spinner/spinner-module';

@NgModule ({
  declarations: [
    ProductsComponent,
    SearchPipe,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SpinnerModule
  ],
  exports: [
    ProductsComponent,
    ProductPageComponent
  ]
})

export class ProductsModule {}
