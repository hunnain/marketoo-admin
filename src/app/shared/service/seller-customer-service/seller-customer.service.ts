import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class SellerCustomerService {
  constructor(private commonService: CommonService) {}

  getSellerOrCustomer(prefix, query) {
    return this.commonService.get(`admin/get-all-${prefix}?${query}`);
  }

  getById(prefix, uuid) {
    return this.commonService.get(`admin/get-${prefix}-by-id/${uuid}`);
  }

  approveReject(prefix, uuid, status, notification = false) {
    return this.commonService.post(`admin/approve-reject-${prefix}`, {
      SellerId: uuid,
      Status: status,
      blastEmail: notification,
    });
  }

  updateOrder(id, data) {
    return this.commonService.put(`order/${id}`, data);
  }
}
