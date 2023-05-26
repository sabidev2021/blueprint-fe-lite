import {TestBed} from '@angular/core/testing';

import {BackOfficeLayoutService} from './back-office-layout.service';

describe('BackOfficeLayoutService', () => {
  let service: BackOfficeLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackOfficeLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
