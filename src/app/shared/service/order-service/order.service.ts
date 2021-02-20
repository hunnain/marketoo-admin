import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private commonService: CommonService) {}

  getOrders(query) {
    return this.commonService.get(`admin/get-all-orders?${query}`);
  }

  getFilteredOrders(query) {
    return this.commonService.get(`admin/get-filtered-orders?${query}`);
  }

  getOrderById(uuid) {
    return this.commonService.get(`order/GetOrderById/${uuid}`);
  }
  // update order status
  updateOrderStatus(order_id, status) {
    return this.commonService.get(`admin/update-status/${order_id}-${status}`);
  }

  updateOrder(id, data) {
    return this.commonService.put(`order/${id}`, data);
  }
}
