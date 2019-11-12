import {LoginComponent} from './login.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

export const LoginRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
