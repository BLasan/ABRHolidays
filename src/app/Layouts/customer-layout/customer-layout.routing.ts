import { Routes } from '@angular/router';
import { CustomerHomeComponent } from '../../Modules/Customer/customer-home/customer-home.component';
import { AboutUsComponent } from '../../Modules/Customer/about-us/about-us.component';
import { AccomodationComponent } from '../../Modules/Customer/accomodation/accomodation.component';
import { ContactUsComponent } from '../../Modules/Customer/contact-us/contact-us.component';
import { DiscoverWorldComponent } from '../../Modules/Customer/discover-world/discover-world.component';
import { FaqComponent } from '../../Modules/Customer/faq/faq.component';
import { InboundPackagesComponent } from '../../Modules/Customer/inbound-packages/inbound-packages.component';
import { TransfersComponent } from '../../Modules/Customer/transfers/transfers.component';
import { PackageCategoryComponent } from '../../Modules/Customer/package-category/package-category.component';
import { NewsEventsComponent } from '../../Modules/Customer/news-events/news-events.component';
import { TestimonialsComponent } from '../../Modules/Customer/testimonials/testimonials.component';
import { DestinationsComponent } from '../../Modules/Customer/destinations/destinations.component';

export const CustomerLayoutRoutes: Routes = [
    { path: 'home',component:CustomerHomeComponent},
    { path: 'about-us',component:AboutUsComponent},
    { path: 'accomodation',component:AccomodationComponent},
    { path: 'contact-us',component:ContactUsComponent},
    { path: 'discover-world',component:DiscoverWorldComponent},
    { path:'faq',component:FaqComponent},
    { path:'news-events/:news_id',component:NewsEventsComponent},
    { path:'inbound-packages/:code',component:InboundPackagesComponent},
    { path:'package-category/:category',component:PackageCategoryComponent},
    { path: 'transfers',component:TransfersComponent},
    { path: 'testimonials',component:TestimonialsComponent},
    { path:'destinations',component:DestinationsComponent}
];
