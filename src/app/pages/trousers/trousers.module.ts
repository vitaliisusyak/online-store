import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TrousersComponent} from './trousers.component';
import {TrousersRoutingComponent} from './trousers-routing.module';
import {ProductsModule, SpinnerModule} from '@shared/components';
import {TrousersService} from './trousers.service';

@NgModule({
  declarations: [
    TrousersComponent
  ],
  imports: [
    CommonModule,
    TrousersRoutingComponent,
    ProductsModule,
    SpinnerModule
  ],
  exports: [
    TrousersComponent
  ],
  providers: [
    TrousersService
  ]
})

export class TrousersModule {
}
