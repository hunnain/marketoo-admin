import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './list-notification/notification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationComponent,
    data: {
      title: 'Notification',
      breadcrumb: 'Notification',
    },
  },
  {
    path: 'add-notification',
    component: AddNotificationComponent,
    data: {
      title: 'Add Notification',
      breadcrumb: 'Add Notification',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationRoutingModule {}
