import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

import { ProductsComponent } from './products.component';
import { SearchPipe} from '@shared/pipes';

@NgModule ({
  declarations: [
    ProductsComponent,
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
    ProductsComponent
  ]
})

export class ProductsModule {}
