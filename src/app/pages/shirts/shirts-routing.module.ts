import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShirtsComponent} from './shirts.component';
import {ProductPageComponent} from '@shared/components';

const routes: Routes = [{
  path: '',
  component: ShirtsComponent
},
  {
    path: ':id',
    component: ProductPageComponent
  }
];

export const ShirtsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
