import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './add-campaign/campaign.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
// import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};
@NgModule({
  declarations: [
    CampaignComponent,
    CampaignListComponent,
    // CreateReimbursementComponent,
    // CreateStoreCreditComponent,
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    NgbModule,
    DropzoneModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
    NgbActiveModal,
  ],
})
export class CampaignModule {}
