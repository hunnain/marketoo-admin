import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ReimbursementsRoutingModule } from './reimbursement-routing.module';
import { ListReimbursementComponent } from './list-reimbursement/list-reimbursement.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

@NgModule({
  declarations: [
    ListReimbursementComponent,
    ViewDetailComponent,
    // CreateReimbursementComponent,
    CreateStoreCreditComponent,
  ],
  imports: [
    CommonModule,
    ReimbursementsRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class ReimbursementsModule {}
