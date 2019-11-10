import * as tslib_1 from "tslib";
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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './Modules/Admin/login/login.component';
import { AuthGuardAdminService } from './services/AuthGuardAdmin.service';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { AuthGuardCustomerService } from './services/AuthGuardCustomer.service';
import { DestinationsComponent } from './destinations/destinations.component';
var firebaseConfig = {
    apiKey: "AIzaSyCce9qtAWZZNhKLUlOlgasnehPPm3haBgI",
    authDomain: "hotel-management-5b661.firebaseapp.com",
    databaseURL: "https://hotel-management-5b661.firebaseio.com",
    projectId: "hotel-management-5b661",
    storageBucket: "gs://hotel-management-5b661.appspot.com/",
    messagingSenderId: "337942867698",
    appId: "1:337942867698:web:760aa0a20effceef066a6b",
    measurementId: "G-VGP3TWJ9K7"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule,
                AngularFireStorageModule // storage
            ],
            declarations: [
                AppComponent,
                AdminLayoutComponent,
                CustomerLayoutComponent,
                LoginComponent,
                PageNotFoundComponent,
                CustomerNavbarComponent,
                DestinationsComponent,
            ],
            providers: [AuthGuardAdminService, AuthGuardCustomerService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map