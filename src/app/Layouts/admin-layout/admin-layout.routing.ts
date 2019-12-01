import { Routes } from '@angular/router';

import { DashboardComponent } from '../../Modules/Admin/dashboard/dashboard.component';
import { UserProfileComponent } from '../../Modules/Admin/user-profile/user-profile.component';
import { TableListComponent } from '../../Modules/Admin/table-list/table-list.component';
import { TypographyComponent } from '../../Modules/Admin/typography/typography.component';
import { IconsComponent } from '../../Modules/Admin/icons/icons.component';
import { MapsComponent } from '../../Modules/Admin/maps/maps.component';
import { NotificationsComponent } from '../../Modules/Admin/notifications/notifications.component';
import { UpgradeComponent } from '../../Modules/Admin/upgrade/upgrade.component';
import { SettingsComponent } from '../..//Modules/Admin/settings/settings.component';
import { AddDetailsComponent } from '../../Modules/Admin/add-details/add-details.component';
import { ManageNewsFeedComponent } from '../../Modules/Admin/manage-news-feed/manage-news-feed.component';
import { AccomodationTransferComponent } from '../../Modules/Admin/accomodation-transfer/accomodation-transfer.component';
import { EditPackagesComponent } from '../../Modules/Admin/edit-packages/edit-packages.component';
import { FilterDataComponent } from '../../Modules/Admin/filter-data/filter-data.component';
import { EnquiriesComponent } from '../../Modules/Admin/enquiries/enquiries.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'view-details',     component: TableListComponent },
    { path: 'settings',       component:   SettingsComponent },
    { path: 'add-package_details',     component: AddDetailsComponent },
    // { path: 'accomodation-transfer',     component: AccomodationTransferComponent},
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'edit-package/:package_id' , component:EditPackagesComponent},
    { path: 'manage-news-feed' , component:ManageNewsFeedComponent},
    { path: 'enquiry' , component:EnquiriesComponent},
    { path: 'filter-data/:category/:search_text' , component:FilterDataComponent}
];
