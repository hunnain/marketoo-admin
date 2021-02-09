import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private commonService: CommonService) {}
  getPromotion(query = '') {
    return this.commonService.get(`admin/get-promotion?${query}`);
  }

  // update returnExchange status
  updatePromotion(data) {
    return this.commonService.post(`admin/update-promotion`, data);
  }
}
