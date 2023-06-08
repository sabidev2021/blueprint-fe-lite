import { TestBed } from '@angular/core/testing';

import { DemoController } from './demo-controller.service';

describe('DemoService', () => {
  let service: DemoController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
