import {TestBed} from '@angular/core/testing';

import {SabiLangService} from './sabi-lang.service';

describe('LangService', () => {
  let service: SabiLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabiLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
