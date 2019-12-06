import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe} from '../../pipes/search.pipe';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

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
