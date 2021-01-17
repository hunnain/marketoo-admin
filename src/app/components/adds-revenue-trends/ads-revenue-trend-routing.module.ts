import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsRevenueComponent } from './ads-revenue/ads-revenue.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { AdsTrendComponent } from './ads-trends/ads-trend.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ads-revenue',
        component: AdsRevenueComponent,
        data: {
          title: 'Revenue',
          breadcrumb: 'Revenue',
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
      {
        path: 'ads-trend',
        component: AdsTrendComponent,
        data: {
          title: 'Trend',
          breadcrumb: 'Trend',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsRevenueTrendRoutingModule {}
