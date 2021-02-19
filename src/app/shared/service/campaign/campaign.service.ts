import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor(private commonService: CommonService) {}
  getAllCampaigns(query = '') {
    return this.commonService.get(`common/get-all-campaigns${query}`);
  }
  getRandomCampaigns(query = '') {
    return this.commonService.get(`admin/get-random-campaigns${query}`);
  }

  // update returnExchange status
  createCampaign(data) {
    return this.commonService.post(`admin/create-campaign`, data);
  }

  removeCampaign(id) {
    return this.commonService.delete(`admin/delete-campaign/${id}`);
  }
}
