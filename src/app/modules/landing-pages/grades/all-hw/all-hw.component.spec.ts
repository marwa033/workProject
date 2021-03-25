import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHwComponent } from './all-hw.component';

describe('AllHwComponent', () => {
  let component: AllHwComponent;
  let fixture: ComponentFixture<AllHwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
