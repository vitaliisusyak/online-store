import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TrousersComponent } from './trousers.component';

const routes: Routes = [{
  path: '',
  component: TrousersComponent
}];

export const TrousersRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
