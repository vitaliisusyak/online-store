import {UtilityJacketsComponent} from './utility-jackets.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: UtilityJacketsComponent
}]

export const UtilityRoutingJackets: ModuleWithProviders = RouterModule.forChild(routes)
