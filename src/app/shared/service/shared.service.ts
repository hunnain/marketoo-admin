import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  generateUrl(data = {}) {
    let url = '';
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        url = url + `${key}=${data[key]}&`;
      }
    });
    return url;
  }
}
