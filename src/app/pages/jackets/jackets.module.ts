import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JacketsComponent } from './jackets.component';
import { ProductItemModule } from '@shared-components/product-item/product-item.module';
import { JacketsRoutingModule } from './jackets-routing.module';
import { SpinnerModule } from '@shared-components/spinner/spinner-module';

@NgModule ({
  declarations: [
    JacketsComponent
  ],
  imports: [
    CommonModule,
    JacketsRoutingModule,
    ProductItemModule,
    SpinnerModule
  ],
  exports: [
    JacketsComponent
  ]
})
export class JacketsModule {}

