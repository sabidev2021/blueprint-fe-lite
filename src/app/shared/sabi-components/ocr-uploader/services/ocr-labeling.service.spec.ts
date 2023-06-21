import { TestBed } from '@angular/core/testing';

import { OcrLabelingService } from './ocr-labeling.service';

describe('OcrLabelingService', () => {
  let service: OcrLabelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcrLabelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
