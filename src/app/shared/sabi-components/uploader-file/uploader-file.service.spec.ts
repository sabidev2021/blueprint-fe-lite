import {TestBed} from '@angular/core/testing';

import {UploaderFileService} from './uploader-file.service';

describe('UploaderFileService', () => {
  let service: UploaderFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaderFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
