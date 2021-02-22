import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class BlastNotificationsService {
  constructor(private commonService: CommonService) {}

  getNotifications(query) {
    return this.commonService.get(`/admin/get-all-spread-notification${query}`);
  }

  addNotification(data) {
    return this.commonService.post('admin/spread-notification', data);
  }
}
