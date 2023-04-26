import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReviewComponent } from './display-review.component';

describe('DisplayReviewComponent', () => {
  let component: DisplayReviewComponent;
  let fixture: ComponentFixture<DisplayReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
