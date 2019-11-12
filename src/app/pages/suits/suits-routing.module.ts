import {SuitsComponent} from './suits.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: SuitsComponent
}];

export const SuitsRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes);
