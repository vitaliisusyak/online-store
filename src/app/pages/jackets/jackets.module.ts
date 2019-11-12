import {NgModule} from '@angular/core';
import {JacketsComponent} from './jackets.component';
import {CommonModule} from '@angular/common';
import {JacketsRoutingModule} from './jackets-routing.module';

@NgModule ({
  declarations: [
    JacketsComponent
  ],
  imports: [
    CommonModule,
    JacketsRoutingModule
  ],
  exports: [
    JacketsComponent
  ]
})
export class JacketsModule {}

