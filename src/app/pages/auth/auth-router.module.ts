import { AuthComponent } from './auth.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AuthComponent
}];

export const AuthRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
