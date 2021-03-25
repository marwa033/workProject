import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolHWComponent } from './school-hw.component';

describe('SchoolHWComponent', () => {
  let component: SchoolHWComponent;
  let fixture: ComponentFixture<SchoolHWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolHWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolHWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
