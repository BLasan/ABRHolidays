import { Routes } from '@angular/router';
import { CustomerHomeComponent } from '../../Modules/Customer/customer-home/customer-home.component';
import { AboutUsComponent } from '../../Modules/Customer/about-us/about-us.component';
import { AccomodationComponent } from '../../Modules/Customer/accomodation/accomodation.component';
import { ContactUsComponent } from '../../Modules/Customer/contact-us/contact-us.component';
import { DiscoverWorldComponent } from '../../Modules/Customer/discover-world/discover-world.component';
import { FaqComponent } from '../../Modules/Customer/faq/faq.component';
import { InboundPackagesComponent } from '../../Modules/Customer/inbound-packages/inbound-packages.component';
import { TransfersComponent } from '../../Modules/Customer/transfers/transfers.component';

export const CustomerLayoutRoutes: Routes = [
    { path: 'home',component: CustomerHomeComponent },
    { path: 'about-us',component:AboutUsComponent},
    { path: 'accomodation',component:AccomodationComponent},
    { path: 'contact-us',component:ContactUsComponent},
    { path: 'discover-world',component:DiscoverWorldComponent},
    { path:'faq',component:FaqComponent},
    { path:'inbound-packages',component:InboundPackagesComponent},
    { path: 'transfers',component:TransfersComponent}
];
