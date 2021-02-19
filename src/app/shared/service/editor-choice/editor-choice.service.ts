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
  addToEditorsPick(query) {
    return this.commonService.get(`admin/add-product-to-editors-pick/${query}`);
  }
  removeToEditorsPick(query) {
    return this.commonService.get(
      `admin/remove-product-to-editors-pick/${query}`
    );
  }
}
