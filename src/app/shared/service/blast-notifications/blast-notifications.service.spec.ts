import { TestBed } from '@angular/core/testing';

import { BlastNotificationsService } from './blast-notifications.service';

describe('BlastNotificationsService', () => {
  let service: BlastNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlastNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
