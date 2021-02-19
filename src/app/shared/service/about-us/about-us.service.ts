import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  constructor(private commonService: CommonService) {}
  getAboutUs(query = '') {
    return this.commonService.get(`common/get-about-us${query}`);
  }

  // update returnExchange status
  updateAboutUs(data) {
    return this.commonService.post(`admin/update-about-us`, data);
  }
}
