import {JacketsComponent} from './jackets.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: JacketsComponent
}]

export const  JacketsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
