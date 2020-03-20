import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile.component'
import { UserPurchaseHistoryComponent } from './user-purchase-history/user-purchase-history.component';

const routes: Routes = [
    {
        path: '',
        component: UserProfileComponent,
        children: [
            { path: 'purchase-history', component: UserPurchaseHistoryComponent }
        ]
    }
]

export const UserProfileRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)