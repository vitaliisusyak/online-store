import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JacketsComponent } from './jackets.component';
import {ProductPageComponent} from '@shared/components/product-page/product-page.component';

const routes: Routes = [{
  path: '',
  component: JacketsComponent
},
  {
    path: ':id',
    component: ProductPageComponent
  }];

export const  JacketsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
