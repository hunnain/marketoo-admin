import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class ReturnExchangeService {
  constructor(private commonService: CommonService) {}
  getReturnExchange(query) {
    return this.commonService.get(`admin/get-all-return-exchange?${query}`);
  }

  getOrderById(uuid) {
    return this.commonService.get(`admin/returnExchange/GetOrderById/${uuid}`);
  }
  // update returnExchange status
  updateReturnExchangetatus(seller_id, check = false) {
    return this.commonService.get(`admin/update-status/${seller_id}-${check}`);
  }

  updateOrder(id, data) {
    return this.commonService.put(`returnExchange/${id}`, data);
  }

  sendMessage(data) {
    return this.commonService.post(`send-msg`, data);
  }
}
