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

  updateOrderPrice(data) {
    return this.commonService.post(`order/update-order-total`, data);
  }

  updateOrder(id, data) {
    return this.commonService.put(`order/${id}`, data);
  }

  updatePaymentStatus(id, status) {
    return this.commonService.get(
      `admin/update-payment-status/${id}-${status}`
    );
  }
  updateShippingMethod(data) {
    return this.commonService.post(`order/update-shipping-details`, data);
  }

  sendMessage(data) {
    return this.commonService.post(`chat/send-msg`, data);
  }
}
