import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SellerCustomerRoutingModule } from './seller-customer-routing.module';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { ApplicantsComponent } from './applicants/applicants.component';

@NgModule({
  declarations: [
    ViewDetailComponent,
    SellerComponent,
    CustomerComponent,
    SellerProductsComponent,
    ApplicantsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    SellerCustomerRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class SellerCustomerModule {}
