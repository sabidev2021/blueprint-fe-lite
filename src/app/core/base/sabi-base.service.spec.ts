import {TestBed} from '@angular/core/testing';

import {SabiBaseService} from './sabi-base.service';

describe('SabiBaseService', () => {
  let service: SabiBaseService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabiBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
