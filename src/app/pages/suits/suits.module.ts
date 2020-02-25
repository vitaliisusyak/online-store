import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuitsComponent } from './suits.component';
import { SuitsRoutingComponent } from './suits-routing.module';
import { ProductsModule, SpinnerModule } from '@shared/components';
import { SuitsService } from './suits.service';


@NgModule({
   declarations: [
     SuitsComponent,
   ],
  imports: [
    CommonModule,
    SuitsRoutingComponent,
    ProductsModule,
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
