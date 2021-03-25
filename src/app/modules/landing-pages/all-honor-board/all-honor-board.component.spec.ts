import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHonorBoardComponent } from './all-honor-board.component';

describe('AllHonorBoardComponent', () => {
  let component: AllHonorBoardComponent;
  let fixture: ComponentFixture<AllHonorBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHonorBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHonorBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
