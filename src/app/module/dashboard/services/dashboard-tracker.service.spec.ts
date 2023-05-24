import {TestBed} from '@angular/core/testing';

import {DashboardTrackerService} from './dashboard-tracker.service';

describe('DashboardTrackerService', () => {
  let service: DashboardTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
