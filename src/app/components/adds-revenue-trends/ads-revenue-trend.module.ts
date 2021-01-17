import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountToModule } from 'angular-count-to';
import { AddsRevenueTrendRoutingModule } from './ads-revenue-trend-routing.module';
import { AdsRevenueComponent } from './ads-revenue/ads-revenue.component';
import { AdsTrendComponent } from './ads-trends/ads-trend.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartistModule } from 'ng-chartist';
@NgModule({
  declarations: [
    // AddsRevenueTrendModule,
    // CreateReimbursementComponent,
    AdsRevenueComponent,
    AdsTrendComponent,
  ],
  imports: [
    CommonModule,
    AddsRevenueTrendRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    SharedModule,
    CountToModule,
    FormsModule,
    ChartistModule,
  ],
})
export class AddsRevenueTrendModule {}
