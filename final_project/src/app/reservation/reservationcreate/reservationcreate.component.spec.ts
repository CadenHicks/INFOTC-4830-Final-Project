import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationcreateComponent } from './reservationcreate.component';

describe('ReservationcreateComponent', () => {
  let component: ReservationcreateComponent;
  let fixture: ComponentFixture<ReservationcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
