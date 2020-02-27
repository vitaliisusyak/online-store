import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccessoriesComponent} from './accessories.component';
import {AccessoryComponent} from "./accessory/accessory.component";

const routes: Routes = [{
  path: '',
  component: AccessoriesComponent
  },
  {
    path: ':id',
    component: AccessoryComponent
  },
  {
    path: ':**',
    redirectTo: ''
  },
];

export const AccessoriesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
