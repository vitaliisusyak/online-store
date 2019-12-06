import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrousersComponent } from './trousers.component';
import { TrousersRoutingComponent } from './trousers-routing.module';
import { ProductItemModule } from '@shared-components/product-item/product-item.module';
import { SpinnerModule } from '@shared-components/spinner/spinner-module';
import { TrousersService } from './trousers.service';

@NgModule ({
  declarations: [
    TrousersComponent
  ],
  imports: [
    CommonModule,
    TrousersRoutingComponent,
    ProductItemModule,
    SpinnerModule
  ],
  exports: [
    TrousersComponent
  ],
  providers: [
    TrousersService
  ]
})

export class TrousersModule {}
