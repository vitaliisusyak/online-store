import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesComponent } from './accessories.component';
import { AccessoriesRoutingModule } from './accessories-routing.module';
import { ProductsModule, SpinnerModule, ProductItemModule } from '@shared/components';
import { AccessoriesService } from './accessories.service';

@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    ProductsModule,
    SpinnerModule,
    ProductItemModule
  ],
  exports: [
    AccessoriesComponent
  ],
  providers: [
    AccessoriesService
  ]
})
export class AccessoriesModule {}
