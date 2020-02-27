import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";

import { AccessoriesComponent } from './accessories.component';
import { AccessoriesRoutingModule } from './accessories-routing.module';
import { ProductsModule, SpinnerModule } from '@shared/components';
import { AccessoriesService } from './accessories.service';
import {RouterModule} from "@angular/router";
import { AccessoryComponent } from './accessory/accessory.component';

@NgModule({
  declarations: [
    AccessoriesComponent,
    AccessoryComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    ProductsModule,
    SpinnerModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    AccessoriesComponent
  ],
  providers: [
    AccessoriesService
  ]
})
export class AccessoriesModule {}
