import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionComponent } from './list-promotion/promotion.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
// import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

const routes: Routes = [
  {
    path: '',
    component: PromotionComponent,
    data: {
      title: 'Promotion',
      breadcrumb: 'Promotion',
    },

    // path: '',
    // children: [
    //   {
    //     path: '',
    //     component: PromotionComponent,
    //     data: {
    //       title: 'Promotion',
    //       breadcrumb: 'Promotion',
    //     },
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionRoutingModule {}
