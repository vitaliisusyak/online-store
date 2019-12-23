import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuitsComponent } from './suits.component';
import { SuitsRoutingComponent } from './suits-routing.module';
import { ProductItemModule, SpinnerModule } from '@shared/components';
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
