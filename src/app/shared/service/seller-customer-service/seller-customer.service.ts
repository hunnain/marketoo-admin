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

  getFilteredSellerCustomer(prefix, query) {
    return this.commonService.get(`admin/get-filtered-${prefix}?${query}`);
  }
  // get-seller-info-by-id
  getById(prefix, uuid) {
    return this.commonService.get(`admin/get-${prefix}-by-id/${uuid}`);
  }

  getSellerInfoById(prefix, uuid) {
    return this.commonService.get(`admin/get-${prefix}-info-by-id/${uuid}`);
  }
  getCustomersCode() {
    return this.commonService.get(`coupon/get-customercodes`);
  }

  approveRejectSeller(prefix, data) {
    return this.commonService.post(`admin/approve-reject-${prefix}`, {
      SellerId: data.uuid,
      Status: data.status,
      blastEmail: data.notification,
    });
  }

  approveRejectSellerProduct(data) {
    return this.commonService.post(`admin/approve-reject-products`, data);
  }

  updateOrder(id, data) {
    return this.commonService.put(`order/${id}`, data);
  }
}
