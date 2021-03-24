import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
// import { ProductListComponent } from '../products/physical/product-list/product-list.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { SignUpComponent } from './sign-up-data-view/sign-up-data-view.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
        path: 'seller/new-applicant/:id/form',
        component: SignUpComponent,
        data: {
          title: 'Form View',
          breadcrumb: 'Form View',
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
      {
        path: 'seller/:id/product-list/:product_id',
        component: ProductDetailComponent,
        data: {
          title: 'Product Detail',
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
