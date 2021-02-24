import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private commonService: CommonService) {}

  getDashboardData() {
    return this.commonService.get(`admin/get-monthly-report`);
  }

  // addNotification(data) {
  //   return this.commonService.post('admin/spread-notification', data);
  // }
}
