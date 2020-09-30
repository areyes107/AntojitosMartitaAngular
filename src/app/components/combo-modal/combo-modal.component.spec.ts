import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboModalComponent } from './combo-modal.component';

describe('ComboModalComponent', () => {
  let component: ComboModalComponent;
  let fixture: ComponentFixture<ComboModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
