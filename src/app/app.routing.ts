import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './Modules/Admin/login/login.component';
import { AuthGuardAdminService } from './services/AuthGuardAdmin.service';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';

const routes: Routes =[
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuardAdminService],
    children: [
        {
      path: '',
      loadChildren: './Layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path:'page-not-found',
    component:PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
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
