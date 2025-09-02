import { TestBed } from '@angular/core/testing';

import { BibleReaderSidenavService } from './bible-reader-sidenav-service.service';

describe('BibleReaderSidenavServiceService', () => {
  let service: BibleReaderSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleReaderSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
