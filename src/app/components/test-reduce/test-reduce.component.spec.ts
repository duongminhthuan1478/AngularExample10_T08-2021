import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReduceComponent } from './test-reduce.component';

describe('TestReduceComponent', () => {
  let component: TestReduceComponent;
  let fixture: ComponentFixture<TestReduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
