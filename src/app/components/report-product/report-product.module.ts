import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReportProductRoutingModule } from './report-product-routing.module';
import { ReportProductComponent } from './report-product.component';
// import { ViewDetailComponent } from './view-detail/view-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ReportProductComponent,
    // ,ViewDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ReportProductRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class ReportProductModule {}
