import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesComponent } from './accessories.component';
import { AccessoriesRoutingComponent } from './accessories-routing.module';
import { ProductItemModule, SpinnerModule } from '@shared/components';
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
