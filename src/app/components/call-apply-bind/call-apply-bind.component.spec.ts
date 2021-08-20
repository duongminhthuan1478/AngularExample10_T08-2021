import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallApplyBindComponent } from './call-apply-bind.component';

describe('CallApplyBindComponent', () => {
  let component: CallApplyBindComponent;
  let fixture: ComponentFixture<CallApplyBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallApplyBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallApplyBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
