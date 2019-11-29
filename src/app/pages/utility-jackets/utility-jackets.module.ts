import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UtilityJacketsComponent} from './utility-jackets.component';
import {UtilityRoutingJackets} from './utility-jackets-routing.module';
import {ProductItemModule} from '../../shared/product-item/product-item.module';
import {SpinnerModule} from '../../shared/spinner/spinner-module';
import {UtilityJacketsService} from './utility-jackets.service';

@NgModule({
  declarations: [
    UtilityJacketsComponent
  ],
  imports: [
    CommonModule,
    UtilityRoutingJackets,
    ProductItemModule,
    SpinnerModule
  ],
  exports: [
    UtilityJacketsComponent
  ],
  providers: [
    UtilityJacketsService
  ]
})

export class UtilityJacketsModule {}
