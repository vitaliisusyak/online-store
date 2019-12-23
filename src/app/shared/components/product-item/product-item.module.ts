import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

import { ProductItemComponent } from './product-item.component';
import { SearchPipe} from '@shared/pipes';

@NgModule ({
  declarations: [
    ProductItemComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ProductItemComponent
  ]
})

export class ProductItemModule {}
