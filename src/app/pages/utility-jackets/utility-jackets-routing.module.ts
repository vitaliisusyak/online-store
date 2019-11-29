import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UtilityJacketsComponent } from './utility-jackets.component';

const routes: Routes = [{
  path: '',
  component: UtilityJacketsComponent
}];

export const UtilityRoutingJackets: ModuleWithProviders = RouterModule.forChild(routes);
