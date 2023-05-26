import {TestBed} from '@angular/core/testing';

import {UploaderDropboxService} from './uploader-dropbox.service';

describe('UploaderDropboxService', () => {
  let service: UploaderDropboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaderDropboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
