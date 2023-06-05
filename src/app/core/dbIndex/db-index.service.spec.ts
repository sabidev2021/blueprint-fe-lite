import {TestBed} from '@angular/core/testing';

import {DbIndexService} from './db-index.service';

describe('DbIndexService', () => {
    let service: DbIndexService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DbIndexService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
