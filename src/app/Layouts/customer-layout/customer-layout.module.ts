import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from '../../Modules/Customer/customer-home/customer-home.component';
import { RouterModule } from '@angular/router';
import { CustomerLayoutRoutes } from './customer-layout.routing';
@NgModule({
  declarations: [CustomerHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerLayoutRoutes),
  ]
})
export class CustomerLayoutModule { }
