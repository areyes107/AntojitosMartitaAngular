import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarCombosComponent } from './familiar-combos.component';

describe('FamiliarCombosComponent', () => {
  let component: FamiliarCombosComponent;
  let fixture: ComponentFixture<FamiliarCombosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarCombosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
