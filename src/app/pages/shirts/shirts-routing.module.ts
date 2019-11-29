import { RouterModule, Routes } from '@angular/router';
import { ShirtsComponent } from './shirts.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: ShirtsComponent
}];

export const ShirtsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
