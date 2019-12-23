import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrousersComponent } from './trousers.component';
import { TrousersRoutingComponent } from './trousers-routing.module';
import { ProductItemModule, SpinnerModule } from '@shared/components';
import { TrousersService } from './trousers.service';

@NgModule ({
  declarations: [
    TrousersComponent
  ],
  imports: [
    CommonModule,
    TrousersRoutingComponent,
    ProductItemModule,
    SpinnerModule
  ],
  exports: [
    TrousersComponent
  ],
  providers: [
    TrousersService
  ]
})

export class TrousersModule {}
