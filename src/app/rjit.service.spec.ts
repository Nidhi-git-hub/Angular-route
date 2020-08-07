import { TestBed } from '@angular/core/testing';

import { RjitService } from './rjit.service';

describe('RjitService', () => {
  let service: RjitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RjitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
