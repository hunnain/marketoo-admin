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

  updateBannerStatus(status, isActive = false) {
    return this.commonService.get(
      `admin/update-banner-status/${status}-${isActive}`
    );
  }

  AddBanner(data) {
    return this.commonService.post(`admin/create-banner`, data);
  }

  updateBanner(id, data) {
    return this.commonService.post(`admin/update-banner/${id}`, data);
  }

  deleteBanner(id) {
    return this.commonService.delete(`admin/delete-banner/${id}`);
  }
}
