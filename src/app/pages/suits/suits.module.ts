import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuitsComponent } from './suits.component';
import { SuitsRoutingComponent } from './suits-routing.module';
import { ProductItemModule } from '../../shared/product-item/product-item.module';
import { SpinnerModule } from '../../shared/spinner/spinner-module';
import { SuitsService } from './suits.service';


@NgModule({
   declarations: [
     SuitsComponent,
   ],
  imports: [
    CommonModule,
    SuitsRoutingComponent,
    ProductItemModule,
    SpinnerModule
  ],
  exports: [
    SuitsComponent
  ],
  providers: [
    SuitsService
  ]
})
export class SuitsModule {}
