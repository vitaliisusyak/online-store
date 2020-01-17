import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { AuthRoutingComponent } from './auth-router.module';
import { AuthService } from './auth.service';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRoutingComponent,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    AuthComponent
  ],
  providers: [
    AuthService
  ]
})

export class AuthModule {}
