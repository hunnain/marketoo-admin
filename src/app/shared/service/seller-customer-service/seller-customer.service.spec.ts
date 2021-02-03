import { TestBed } from '@angular/core/testing';

import { SellerCustomerService } from './seller-customer.service';

describe('SellerCustomerService', () => {
  let service: SellerCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
