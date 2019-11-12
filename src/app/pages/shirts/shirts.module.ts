import {NgModule} from '@angular/core';
import {ShirtsComponent} from './shirts.component';
import {CommonModule} from '@angular/common';
import {ShirtsRoutingModule} from './shirts-routing.module'

@NgModule ({
  declarations: [
    ShirtsComponent
  ],
  imports: [
    CommonModule,
    ShirtsRoutingModule
  ],
  exports: [
    ShirtsComponent
  ]
})

export class ShirtsModule {}
