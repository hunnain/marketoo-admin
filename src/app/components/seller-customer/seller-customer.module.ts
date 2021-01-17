import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SellerCustomerRoutingModule } from './seller-customer-routing.module';
import { SellerCustomerComponent } from './seller-customer/seller-customer.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SellerCustomerComponent, ViewDetailComponent],
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
