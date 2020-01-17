import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'suits',
    loadChildren: () => import('./pages/suits/suits.module').then(mod => mod.SuitsModule)
  },
  {
    path: 'jackets',
    loadChildren: () => import('./pages/jackets/jackets.module').then(mod => mod.JacketsModule)
  },
  {
    path: 'trousers',
    loadChildren: () => import('./pages/trousers/trousers.module').then(mod => mod.TrousersModule)
  },
  {
    path: 'shirts',
    loadChildren: () => import('./pages/shirts/shirts.module').then(mod => mod.ShirtsModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('./pages/accessories/accessories.module').then(mod => mod.AccessoriesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
