import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesComponent } from './accessories.component';
import { AccessoriesRoutingComponent } from './accessories-routing.module';
import { ProductItemModule } from '@shared-components/product-item/product-item.module';
import { SpinnerModule } from '@shared-components/spinner/spinner-module';
import { AccessoriesService } from './accessories.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingComponent,
    ProductItemModule,
    SpinnerModule,
    FormsModule
  ],
  exports: [
    AccessoriesComponent
  ],
  providers: [
    AccessoriesService
  ]
})
export class AccessoriesModule {}
