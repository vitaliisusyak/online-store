import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JacketsComponent } from './jackets.component';
import { ProductsModule, SpinnerModule } from '@shared/components';
import { JacketsRoutingModule } from './jackets-routing.module';
import {JacketsService} from './jackets.service';

@NgModule ({
  declarations: [
    JacketsComponent
  ],
  imports: [
    CommonModule,
    JacketsRoutingModule,
    ProductsModule,
    SpinnerModule,
  ],
  exports: [
    JacketsComponent
  ],
  providers: [
    JacketsService
  ]
})
export class JacketsModule {}

