import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosComponent } from './combos.component';

describe('CombosComponent', () => {
  let component: CombosComponent;
  let fixture: ComponentFixture<CombosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
