import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MagazineRoutingModule } from './magazine-routing.module';
import { MagazineComponent } from './magazine.component';
// import { CreateReimbursementComponent } from './create-reimbursement/create-reimbursement.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

@NgModule({
  declarations: [
    MagazineComponent,
    // CreateReimbursementComponent,
    // CreateStoreCreditComponent,
  ],
  imports: [
    CommonModule,
    MagazineRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class MagazineModule {}
