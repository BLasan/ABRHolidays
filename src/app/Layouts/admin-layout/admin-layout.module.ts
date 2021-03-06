import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../Modules/Admin/dashboard/dashboard.component';
import { UserProfileComponent } from '../../Modules/Admin/user-profile/user-profile.component';
import { TableListComponent } from '../../Modules/Admin/table-list/table-list.component';
import { TypographyComponent } from '../../Modules/Admin/typography/typography.component';
import { IconsComponent } from '../../Modules/Admin/icons/icons.component';
import { MapsComponent } from '../../Modules/Admin/maps/maps.component';
import { NotificationsComponent } from '../../Modules/Admin/notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../Modules/Admin/upgrade/upgrade.component';
import { SettingsComponent } from '../../Modules/Admin/settings/settings.component';
import { AddDetailsComponent } from '../../Modules/Admin/add-details/add-details.component';
import {MatSnackBarModule} from '@angular/material';
import { ManageNewsFeedComponent } from '../../Modules/Admin/manage-news-feed/manage-news-feed.component';
import { AccomodationTransferComponent } from '../../Modules/Admin/accomodation-transfer/accomodation-transfer.component';
import { EditPackagesComponent } from '../../Modules/Admin/edit-packages/edit-packages.component';
import { FilterDataComponent } from '../../Modules/Admin/filter-data/filter-data.component';
import { EnquiriesComponent } from '../../Modules/Admin/enquiries/enquiries.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    SettingsComponent,
    AddDetailsComponent,
    ManageNewsFeedComponent,
    AccomodationTransferComponent,
    EditPackagesComponent,
    FilterDataComponent,
    EnquiriesComponent
  ]
})

export class AdminLayoutModule {}
