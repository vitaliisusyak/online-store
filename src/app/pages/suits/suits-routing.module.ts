import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SuitsComponent} from './suits.component';
import {ProductPageComponent} from '@shared/components';

const routes: Routes = [{
  path: '',
  component: SuitsComponent
},
  {
    path: ':id',
    component: ProductPageComponent
  }
];

export const SuitsRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
