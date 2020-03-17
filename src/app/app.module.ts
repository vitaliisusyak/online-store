import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {SpinnerModule} from '@shared/components';
import {BackendInterceptor} from '@shared/services/backendInterceptor';
import {PageNotFoundComponent} from '@shared/components/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {UserBasketComponent} from './pages/user/user-basket/user-basket.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    UserBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    SpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
