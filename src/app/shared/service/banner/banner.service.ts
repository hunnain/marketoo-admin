import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private commonService: CommonService) {}
  getAllBanners(query = '') {
    return this.commonService.get(`common/get-all-banners${query}`);
  }

  updateBanner(status, isActive = false) {
    return this.commonService.get(
      `admin/update-banner-status/${status}-${isActive}`
    );
  }

  AddBanner(data) {
    return this.commonService.post(`admin/create-banner`, data);
  }
}
