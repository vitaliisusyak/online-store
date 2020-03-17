import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccessoriesComponent} from './accessories.component';
import {ProductPageComponent} from '@shared/components';

const routes: Routes = [{
  path: '',
  component: AccessoriesComponent
},
  {
    path: ':id',
    component: ProductPageComponent
  }
];

export const AccessoriesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
