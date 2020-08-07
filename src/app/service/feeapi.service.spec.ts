import { TestBed } from '@angular/core/testing';

import { FeeapiService } from './feeapi.service';

describe('FeeapiService', () => {
  let service: FeeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
