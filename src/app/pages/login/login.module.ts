import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingComponent} from './login-router.module';
import {ButtonModule, InputTextModule, PanelModule, PasswordModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingComponent,
    PanelModule,
    PasswordModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {}
