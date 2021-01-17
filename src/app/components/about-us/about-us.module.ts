import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    // CreateReimbursementComponent,
    // CreateStoreCreditComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class AboutUsModule {}
