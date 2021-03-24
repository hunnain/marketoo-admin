import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { SellerCustomerRoutingModule } from './seller-customer-routing.module';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { SignUpComponent } from './sign-up-data-view/sign-up-data-view.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ViewDetailComponent,
    SellerComponent,
    CustomerComponent,
    SellerProductsComponent,
    ApplicantsComponent,
    SignUpComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    SellerCustomerRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    GalleryModule.forRoot(),
    SharedModule,
  ],
})
export class SellerCustomerModule {}
