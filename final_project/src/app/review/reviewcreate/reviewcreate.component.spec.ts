import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewcreateComponent } from './reviewcreate.component';

describe('ReviewcreateComponent', () => {
  let component: ReviewcreateComponent;
  let fixture: ComponentFixture<ReviewcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
