import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './Modules/Admin/login/login.component';
import { AuthGuardAdminService } from './services/AuthGuardAdmin.service';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';
import { CustomerLayoutRoutes } from './Layouts/customer-layout/customer-layout.routing';
import { CustomerLayoutComponent } from './Layouts/customer-layout/customer-layout.component';
import { AuthGuardCustomerService } from './services/AuthGuardCustomer.service';
import { CustomerHomeComponent } from './Modules/Customer/customer-home/customer-home.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full',
  },
  {
    path:'login',
    component: LoginComponent
  },
   {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuardAdminService],
    children: [
        {
      path: '',
      loadChildren: './Layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '',
    component: CustomerLayoutComponent,
    canActivate:[AuthGuardCustomerService],
    children: [
        {
      path: '',
      loadChildren: './Layouts/customer-layout/customer-layout.module#CustomerLayoutModule'
  }]},
  {
    path:'page-not-found',
    component:PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
