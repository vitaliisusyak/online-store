import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingComponent } from './login-router.module';

/*
import { ButtonModule, InputTextModule, PanelModule, PasswordModule } from 'primeng/primeng';
*/
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingComponent,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {}
