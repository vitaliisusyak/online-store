import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesComponent } from './accessories.component';
import { AccessoriesRoutingComponent } from './accessories-routing.module';
import { ProductItemModule } from '@shared-components/product-item/product-item.module';
import { SpinnerModule } from '@shared-components/spinner/spinner-module';
import { AccessoriesService } from './accessories.service';

@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingComponent,
    ProductItemModule,
    SpinnerModule
  ],
  exports: [
    AccessoriesComponent
  ],
  providers: [
    AccessoriesService
  ]
})
export class AccessoriesModule {}
