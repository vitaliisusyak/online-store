import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductItemComponent} from './product-item.component';

@NgModule ({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductItemComponent
  ]
})

export class ProductItemModule {}
