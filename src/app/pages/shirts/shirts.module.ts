import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShirtsComponent } from './shirts.component';
import { ShirtsRoutingModule } from './shirts-routing.module';
import { ProductItemModule, SpinnerModule } from '@shared/components';
import { ShirtsService } from './shirts.service';

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
