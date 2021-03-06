import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { CustomerLayoutComponent } from './Layouts/customer-layout/customer-layout.component';
import { CustomerHomeComponent } from './Modules/Customer/customer-home/customer-home.component';
import { SettingsComponent } from './Modules/Admin/settings/settings.component';
import { AddDetailsComponent } from './Modules/Admin/add-details/add-details.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ManageNewsFeedComponent } from './Modules/Admin/manage-news-feed/manage-news-feed.component';
import { LoginComponent } from './Modules/Admin/login/login.component'
import { AuthGuardAdminService } from './services/AuthGuardAdmin.service';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { AboutUsComponent } from './Modules/Customer/about-us/about-us.component';
import { ContactUsComponent } from './Modules/Customer/contact-us/contact-us.component';
import { FaqComponent } from './Modules/Customer/faq/faq.component';
import { DiscoverWorldComponent } from './Modules/Customer/discover-world/discover-world.component';
import { InboundPackagesComponent } from './Modules/Customer/inbound-packages/inbound-packages.component';
import { AccomodationComponent } from './Modules/Customer/accomodation/accomodation.component';
import { TransfersComponent } from './Modules/Customer/transfers/transfers.component';
import { AuthGuardCustomerService } from './services/AuthGuardCustomer.service';
import { AccomodationTransferComponent } from './Modules/Admin/accomodation-transfer/accomodation-transfer.component';
import { PackageCategoryComponent } from './Modules/Customer/package-category/package-category.component';
import { NewsEventsComponent } from './Modules/Customer/news-events/news-events.component';
import { TestimonialsComponent } from './Modules/Customer/testimonials/testimonials.component';
import { EditPackagesComponent } from './Modules/Admin/edit-packages/edit-packages.component';
import { DestinationsComponent } from './Modules/Customer/destinations/destinations.component';
import { CustomerFooterComponent } from './components/customer-footer/customer-footer.component';
import { FilterDataComponent } from './Modules/Admin/filter-data/filter-data.component';
import { EnquiryComponent } from './Modules/Customer/enquiry/enquiry.component';
import { EnquiriesComponent } from './Modules/Admin/enquiries/enquiries.component';
import { TransferContactUsComponent } from './Modules/Customer/transfer-contact-us/transfer-contact-us.component';
import { TicketingComponent } from './Modules/Customer/ticketing/ticketing.component';
import { VisaHandlingComponent } from './Modules/Customer/visa-handling/visa-handling.component';
import { InsuranceComponent } from './Modules/Customer/insurance/insurance.component';
import { UserIdleModule } from 'angular-user-idle';
import { DestinationsReadmoreComponent } from './Modules/Customer/destinations-readmore/destinations-readmore.component';
import { ToursComponent } from './Modules/Customer/tours/tours.component';

const firebaseConfig = {
  apiKey: "AIzaSyCce9qtAWZZNhKLUlOlgasnehPPm3haBgI",
  authDomain: "hotel-management-5b661.firebaseapp.com",
  databaseURL: "https://hotel-management-5b661.firebaseio.com",
  projectId: "hotel-management-5b661",
  storageBucket: "gs://hotel-management-5b661.appspot.com/",
  messagingSenderId: "337942867698",
  appId: "1:337942867698:web:760aa0a20effceef066a6b",
  measurementId: "G-VGP3TWJ9K7"
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    UserIdleModule.forRoot({idle: 1800, timeout: 120, ping: 120}),
    // admin.initializeApp(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(), // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomerLayoutComponent,
    LoginComponent,
    PageNotFoundComponent,
    CustomerNavbarComponent,
    CustomerFooterComponent,
    // FilterDataComponent
    // DestinationsComponent,
    // CustomerHomeComponent
  ],
  providers: [AuthGuardAdminService,AuthGuardCustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
