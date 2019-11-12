import {NgModule} from '@angular/core';
import {TrousersComponent} from './trousers.component';
import {CommonModule} from '@angular/common';
import {TrousersRoutingComponent} from './trousers-routing.module';

@NgModule ({
  declarations: [
    TrousersComponent
  ],
  imports: [
    CommonModule,
    TrousersRoutingComponent
  ],
  exports: [
    TrousersComponent
  ]
})

export class TrousersModule {}
