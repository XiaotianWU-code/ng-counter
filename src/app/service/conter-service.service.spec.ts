import { TestBed } from '@angular/core/testing';

import { ConterServiceService } from './conter-service.service';

describe('ConterServiceService', () => {
  let service: ConterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
