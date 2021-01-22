import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { SellerCustomerComponent } from './seller-customer/seller-customer.component';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';

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
        path: 'seller/view-detail/:id',
        component: ViewDetailComponent,
        data: {
          title: 'View Detail',
          breadcrumb: 'View Detail',
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
