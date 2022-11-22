import { TestBed } from '@angular/core/testing';

import { RoughService } from './rough.service';

describe('RoughService', () => {
  let service: RoughService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoughService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
