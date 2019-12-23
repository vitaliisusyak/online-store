import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JacketsComponent } from './jackets.component';
import { ProductItemModule, SpinnerModule } from '@shared/components';
import { JacketsRoutingModule } from './jackets-routing.module';

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

