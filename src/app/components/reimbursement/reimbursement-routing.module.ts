import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListReimbursementComponent } from './list-reimbursement/list-reimbursement.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListReimbursementComponent,
        data: {
          title: 'Reimbursement',
          breadcrumb: 'Reimbursement',
        },
      },
      {
        path: 'reimbursment/view-detail/:id',
        component: ViewDetailComponent,
        data: {
          title: 'View Detail',
          breadcrumb: 'View Detail',
        },
      },
      // {
      //   path: 'edit-reimbursement/:id',
      //   component: CreateReimbursementComponent,
      //   data: {
      //     title: 'Edit Reimbursement',
      //     breadcrumb: 'Edit Reimbursements',
      //   },
      // },
      {
        path: 'create-store-credit',
        component: CreateStoreCreditComponent,
        data: {
          title: 'Create Store Credit',
          breadcrumb: 'Create Store Credit',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReimbursementsRoutingModule {}
