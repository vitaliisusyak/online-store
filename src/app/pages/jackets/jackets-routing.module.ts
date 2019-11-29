import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JacketsComponent } from './jackets.component';

const routes: Routes = [{
  path: '',
  component: JacketsComponent
}]

export const  JacketsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
