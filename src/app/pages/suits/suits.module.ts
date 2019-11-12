import {NgModule} from '@angular/core';
import {SuitsComponent} from './suits.component';
import {CommonModule} from '@angular/common';
import {SuitsRoutingComponent} from './suits-routing.module';

@NgModule({
   declarations: [
     SuitsComponent
   ],
  imports: [
     CommonModule,
     SuitsRoutingComponent
  ],
  exports: [
    SuitsComponent
  ]
})
export class SuitsModule {}
