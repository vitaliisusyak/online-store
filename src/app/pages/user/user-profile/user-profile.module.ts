import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SpinnerModule } from '@shared/components';
import { UserPurchaseHistoryComponent } from './user-purchase-history/user-purchase-history.component';


@NgModule({
    declarations: [
        UserProfileComponent,
        UserPurchaseHistoryComponent
    ],
    imports: [
        CommonModule,
        SpinnerModule,
        UserProfileRoutingModule
      ],
      exports: [
        UserProfileComponent
      ]
})

export class UserProfileModule {}