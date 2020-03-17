import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TrousersComponent } from './trousers.component';
import {ProductPageComponent} from '@shared/components';

const routes: Routes = [{
  path: '',
  component: TrousersComponent
},
  {
    path: ':id',
    component: ProductPageComponent
  }];

export const TrousersRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
