import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class EditorChoiceService {
  constructor(private commonService: CommonService) {}
  getEditorsPick(query) {
    return this.commonService.get(`product/get-editors-pick?${query}`);
  }
  addToEditorsPick(data) {
    return this.commonService.post(`admin/add-product-to-editors-pick`, data);
  }
  removeToEditorsPick(data) {
    return this.commonService.post(
      `admin/remove-product-to-editors-pick`,
      data
    );
  }
}
