import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShirtsComponent } from './shirts.component';
import { ShirtsRoutingModule } from './shirts-routing.module';
import { ProductItemModule } from '../../shared/product-item/product-item.module';
import { ShirtsService } from './shirts.service';
import {SpinnerModule} from '../../shared/spinner/spinner-module';

@NgModule ({
  declarations: [
    ShirtsComponent
  ],
  imports: [
    CommonModule,
    ShirtsRoutingModule,
    ProductItemModule,
    SpinnerModule
  ],
  exports: [
    ShirtsComponent
  ],
  providers: [
    ShirtsService
  ]
})

export class ShirtsModule {}
