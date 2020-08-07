import { TestBed } from '@angular/core/testing';

import { SaucerService } from './saucer.service';

describe('SaucerService', () => {
  let service: SaucerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaucerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
