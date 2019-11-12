import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {LoginRoutingComponent} from './login-router.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingComponent
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {}
