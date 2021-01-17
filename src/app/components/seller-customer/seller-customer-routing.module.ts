import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { SellerCustomerComponent } from './seller-customer/seller-customer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SellerCustomerComponent,
        data: {
          title: "Sellers & Customers",
          breadcrumb: "Sellers & Customers"
        }
      },
      {
        path: 'view-detail/:id',
        component: ViewDetailComponent,
        data: {
          title: "View Detail",
          breadcrumb: "View Detail"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerCustomerRoutingModule { }
