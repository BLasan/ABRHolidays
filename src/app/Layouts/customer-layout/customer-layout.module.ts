import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from '../../Modules/Customer/customer-home/customer-home.component';
import { RouterModule } from '@angular/router';
import { CustomerLayoutRoutes } from './customer-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AboutUsComponent } from '../../Modules/Customer/about-us/about-us.component';
import { ContactUsComponent } from '../../Modules/Customer/contact-us/contact-us.component';
import { FaqComponent } from '../../Modules/Customer/faq/faq.component';
import { DiscoverWorldComponent } from '../../Modules/Customer/discover-world/discover-world.component';
import { InboundPackagesComponent } from '../../Modules/Customer/inbound-packages/inbound-packages.component';
import { AccomodationComponent } from '../../Modules/Customer/accomodation/accomodation.component';
import { TransfersComponent } from '../../Modules/Customer/transfers/transfers.component';
import { PackageCategoryComponent } from '../../Modules/Customer/package-category/package-category.component';
import { NewsEventsComponent } from '../../Modules/Customer/news-events/news-events.component';
import { TestimonialsComponent } from '../../Modules/Customer/testimonials/testimonials.component';
import { DestinationsComponent } from '../../Modules/Customer/destinations/destinations.component';
import { MatSnackBarModule } from '@angular/material';
import { EnquiryComponent } from '../../Modules/Customer/enquiry/enquiry.component';
import { TransferContactUsComponent } from '../../Modules/Customer/transfer-contact-us/transfer-contact-us.component';
import { TicketingComponent } from '../../Modules/Customer/ticketing/ticketing.component';
import { VisaHandlingComponent } from '../../Modules/Customer/visa-handling/visa-handling.component';
import { InsuranceComponent } from '../../Modules/Customer/insurance/insurance.component';
import { DestinationsReadmoreComponent } from '../../Modules/Customer/destinations-readmore/destinations-readmore.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerLayoutRoutes),
    FormsModule,
    NgbModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    CustomerHomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    DiscoverWorldComponent,
    InboundPackagesComponent,
    AccomodationComponent,
    TransfersComponent,
    PackageCategoryComponent,
    NewsEventsComponent,
    TestimonialsComponent,
    DestinationsComponent,
    EnquiryComponent,
    TransferContactUsComponent,
    TicketingComponent,
    VisaHandlingComponent,
    InsuranceComponent,
    DestinationsReadmoreComponent
  ],
})
export class CustomerLayoutModule { }
