import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private commonService: CommonService) { }

  getCoupon(query) {
    return this.commonService.get(`admin/get-coupons${query}`);
  }

  getCouponByCode(code) {
    return this.commonService.get(`admin/get-coupon/${code}`);
  }

  addCoupon(data) {
    return this.commonService.post('admin/create-coupon', data);
  }

  updateCoupon(id, data) {
    return this.commonService.put(`coupon/${id}`, data);
  }

  deleteCoupon(id) {
    return this.commonService.delete(`admin/delete-coupon/${id}`);
  }

  createStoreCredit(data) {
    return this.commonService.post('admin/create-storecredit', data);
  }
}
