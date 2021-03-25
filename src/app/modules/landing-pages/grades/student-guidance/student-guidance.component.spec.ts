import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuidanceComponent } from './student-guidance.component';

describe('StudentGuidanceComponent', () => {
  let component: StudentGuidanceComponent;
  let fixture: ComponentFixture<StudentGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGuidanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
