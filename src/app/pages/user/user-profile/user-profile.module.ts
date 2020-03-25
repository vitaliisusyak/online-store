import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SpinnerModule, DialogEditUserInfoComponent, DialogChangeUserPasswordComponent } from '@shared/components';
import { UserPurchaseHistoryComponent } from './user-purchase-history/user-purchase-history.component';
import { UserProfileService } from './user-profile.service';
import { UserDataResolver } from '../../../shared/services/guards/userData-resolver.service';
import { PasswordHide } from '@shared/pipes';
import { MatInputModule } from '@angular/material';
import { PasswordAsyncValidator } from '@shared/services';


@NgModule({
    declarations: [
        UserProfileComponent,
        UserPurchaseHistoryComponent,
        DialogEditUserInfoComponent,
        DialogChangeUserPasswordComponent,
        PasswordHide
    ],
    imports: [
        CommonModule,
        SpinnerModule,
        UserProfileRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule
      ],
      exports: [
        UserProfileComponent
      ],
      entryComponents: [
        DialogEditUserInfoComponent,
        DialogChangeUserPasswordComponent
      ],
      providers: [
        UserProfileService,
        UserDataResolver,
        PasswordAsyncValidator
      ]
})

export class UserProfileModule {}