import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SuitsComponent} from './suits.component';

const routes: Routes = [{
  path: '',
  component: SuitsComponent
}];

export const SuitsRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
