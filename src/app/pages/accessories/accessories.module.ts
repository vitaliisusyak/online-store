import {NgModule} from '@angular/core';
import {AccessoriesComponent} from './accessories.component';
import {CommonModule} from '@angular/common';
import {AccessoriesRoutingComponent} from './accessories-routing.module';

@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingComponent
  ],
  exports: [
    AccessoriesComponent
  ]
})
export class AccessoriesModule {}
