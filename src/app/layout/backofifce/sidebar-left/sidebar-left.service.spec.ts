import {TestBed} from '@angular/core/testing';

import {SidebarLeftService} from './sidebar-left.service';

describe('SidebarLeftService', () => {
  let service: SidebarLeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarLeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
