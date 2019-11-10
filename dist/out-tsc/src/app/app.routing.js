import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './Modules/Admin/login/login.component';
import { AuthGuardAdminService } from './services/AuthGuardAdmin.service';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';
import { CustomerLayoutComponent } from './Layouts/customer-layout/customer-layout.component';
import { AuthGuardCustomerService } from './services/AuthGuardCustomer.service';
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuardAdminService],
        children: [
            {
                path: '',
                loadChildren: './Layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: '',
        component: CustomerLayoutComponent,
        canActivate: [AuthGuardCustomerService],
        children: [
            {
                path: '',
                loadChildren: './Layouts/customer-layout/customer-layout.module#CustomerLayoutModule'
            }
        ]
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                BrowserModule,
                RouterModule.forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app.routing.js.map