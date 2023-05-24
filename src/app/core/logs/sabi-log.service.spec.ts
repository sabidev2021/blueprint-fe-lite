import {TestBed} from '@angular/core/testing';

import {SabiLogService} from './sabi-log.service';

describe('SabiLogService', () => {
  let service: SabiLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabiLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
