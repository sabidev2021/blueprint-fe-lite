import {TestBed} from '@angular/core/testing';

import {OcrUploaderService} from './ocr-uploader.service';

describe('OcrService', () => {
    let service: OcrUploaderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OcrUploaderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
