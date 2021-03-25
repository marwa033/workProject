import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRelationComponent } from './public-relation.component';

describe('PublicRelationComponent', () => {
  let component: PublicRelationComponent;
  let fixture: ComponentFixture<PublicRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
