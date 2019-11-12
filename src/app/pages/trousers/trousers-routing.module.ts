import {TrousersComponent} from './trousers.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: TrousersComponent
}]

export const TrousersRoutingComponent: ModuleWithProviders = RouterModule.forChild(routes)
