import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '@shared/components/page-not-found/page-not-found.component';
import {UserBasketComponent} from './pages/user/user-basket/user-basket.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'user-basket',
    component: UserBasketComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
