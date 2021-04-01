import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushNotificationRoutingModule } from './push-notification-routing.module';
import { PushNotificationComponent } from './push-notification.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [PushNotificationComponent],
  imports: [
    CommonModule,
    PushNotificationRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class PushNotificationModule { }
