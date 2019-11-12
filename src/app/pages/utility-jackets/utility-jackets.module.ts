import {NgModule} from '@angular/core';
import {UtilityJacketsComponent} from './utility-jackets.component';
import {CommonModule} from '@angular/common';
import {UtilityRoutingJackets} from './utility-jackets-routing.module';

@NgModule({
  declarations: [
    UtilityJacketsComponent
  ],
  imports: [
    CommonModule,
    UtilityRoutingJackets
  ],
  exports: [
    UtilityJacketsComponent
  ]
})

export class UtilityJacketsModule {}
