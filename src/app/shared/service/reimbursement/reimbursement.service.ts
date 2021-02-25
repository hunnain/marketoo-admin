import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class ReimbursementService {
  constructor(private commonService: CommonService) {}

  getReimbursement(query) {
    let prefix = 'sellers';
    return this.commonService.get(`admin/get-filtered-${prefix}?${query}`);
  }

  getReimbursementByCode(code) {
    return this.commonService.get(
      `reimbursement/GetReimbursementByCode/${code}`
    );
  }

  addReimbursement(data) {
    return this.commonService.post('reimbursement', data);
  }

  updateReimbursement(id, data) {
    return this.commonService.put(`reimbursement/${id}`, data);
  }

  deleteReimbursement(id) {
    return this.commonService.delete(`reimbursement/${id}`);
  }
}
