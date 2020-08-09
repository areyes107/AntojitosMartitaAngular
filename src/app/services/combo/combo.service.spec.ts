import { TestBed } from '@angular/core/testing';

import { ComboService } from './combo.service';

describe('ComboService', () => {
  let service: ComboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
