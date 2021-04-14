import { TestBed } from '@angular/core/testing';

import { ReportProductService } from './report-product.service';

describe('ReportProductService', () => {
  let service: ReportProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
