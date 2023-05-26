import { TestBed } from '@angular/core/testing';

import { ToastPrimeService } from './toast-prime.service';

describe('ToastPrimeService', () => {
  let service: ToastPrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastPrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
