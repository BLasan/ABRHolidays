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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'settings',       component:   SettingsComponent },
    { path: 'add-package_details',     component: AddDetailsComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'manage_news_feed' , component:ManageNewsFeedComponent},
];
