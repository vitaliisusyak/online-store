import {AccessoriesComponent} from './accessories.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AccessoriesComponent
}]

export const AccessoriesRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
