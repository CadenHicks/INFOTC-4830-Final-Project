import { TestBed } from '@angular/core/testing';

import { ReviewcreateService } from './reviewcreate.service';

describe('ReviewcreateService', () => {
  let service: ReviewcreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewcreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
