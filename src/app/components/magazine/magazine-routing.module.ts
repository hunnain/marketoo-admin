import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagazineComponent } from './magazine.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
// import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MagazineComponent,
        data: {
          title: 'Magazine',
          breadcrumb: 'Magazine',
        },
      },
      // {
      //   path: 'create-reimbursements',
      //   component: CreateReimbursementComponent,
      //   data: {
      //     title: 'Create Reimbursement',
      //     breadcrumb: 'Create Reimbursements',
      //   },
      // },
      // {
      //   path: 'edit-reimbursement/:id',
      //   component: CreateReimbursementComponent,
      //   data: {
      //     title: 'Edit Reimbursement',
      //     breadcrumb: 'Edit Reimbursements',
      //   },
      // },
      // {
      //   path: 'create-store-credit',
      //   component: CreateStoreCreditComponent,
      //   data: {
      //     title: 'Create Store Credit',
      //     breadcrumb: 'Create Store Credit',
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazineRoutingModule {}
