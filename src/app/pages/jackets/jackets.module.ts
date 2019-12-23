import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JacketsComponent } from './jackets.component';
import { ProductItemModule, SpinnerModule } from '@shared/components';
import { JacketsRoutingModule } from './jackets-routing.module';
import {JacketsService} from './jackets.service';

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
  ],
  providers: [
    JacketsService
  ]
})
export class JacketsModule {}

