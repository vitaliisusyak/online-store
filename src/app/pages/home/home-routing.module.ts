import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
