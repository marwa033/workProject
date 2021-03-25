import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolLeadershipComponent } from './school-leadership.component';

describe('SchoolLeadershipComponent', () => {
  let component: SchoolLeadershipComponent;
  let fixture: ComponentFixture<SchoolLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolLeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
