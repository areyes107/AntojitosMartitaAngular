import { TestBed } from '@angular/core/testing';

import { FamiliarComboService } from './familiar-combo.service';

describe('FamiliarComboService', () => {
  let service: FamiliarComboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamiliarComboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
