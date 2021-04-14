import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportProductComponent } from './report-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ReportProductComponent,
        data: {
          title: 'Report Product',
          breadcrumb: 'Report Product',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportProductRoutingModule {}
