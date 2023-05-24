import {TestBed} from '@angular/core/testing';

import {DbLocalService} from './db-local.service';

describe('DbLocalService', () => {
  let service: DbLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
