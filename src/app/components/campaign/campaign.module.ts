import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

@NgModule({
  declarations: [
    CampaignComponent,
    // CreateReimbursementComponent,
    // CreateStoreCreditComponent,
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class CampaignModule {}
