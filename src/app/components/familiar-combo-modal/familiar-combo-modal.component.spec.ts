import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarComboModalComponent } from './familiar-combo-modal.component';

describe('FamiliarComboModalComponent', () => {
  let component: FamiliarComboModalComponent;
  let fixture: ComponentFixture<FamiliarComboModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarComboModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarComboModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
