import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './list-notification/notification.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddNotificationComponent } from './add-notification/add-notification.component';
// import { ReciversListComponent } from './recivers-list/recivers-list.component';
// import { ChatBoxComponent } from '../messages/chat-box/chat-box.component';
@NgModule({
  declarations: [
    NotificationComponent,
    AddNotificationComponent,
    // ReciversListComponent,
    // ChatBoxComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NotificationRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class NotificationModule {}
