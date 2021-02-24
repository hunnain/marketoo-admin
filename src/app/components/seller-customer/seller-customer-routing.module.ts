import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
// import { ProductListComponent } from '../products/physical/product-list/product-list.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { ApplicantsComponent } from './applicants/applicants.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'seller',
        component: SellerComponent,
        data: {
          title: 'Sellers',
          breadcrumb: 'Sellers',
        },
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: 'Customers',
          breadcrumb: 'Customers',
        },
      },
      {
        path: 'seller/new-applicants',
        component: ApplicantsComponent,
        data: {
          title: 'View Detail',
          breadcrumb: 'View Detail',
        },
      },
      {
        path: 'seller/view-detail/:id',
        component: ViewDetailComponent,
        data: {
          title: 'View Detail',
          breadcrumb: 'View Detail',
        },
      },
      {
        path: 'seller/:id/product-list',
        component: SellerProductsComponent,
        data: {
          title: 'Products',
          breadcrumb: 'Products',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerCustomerRoutingModule {}
