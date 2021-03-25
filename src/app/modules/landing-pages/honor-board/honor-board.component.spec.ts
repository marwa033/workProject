import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorBoardComponent } from './honor-board.component';

describe('HonorBoardComponent', () => {
  let component: HonorBoardComponent;
  let fixture: ComponentFixture<HonorBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
