import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollCourseDetailsComponent } from './enroll-course-details.component';

describe('EnrollCourseDetailsComponent', () => {
  let component: EnrollCourseDetailsComponent;
  let fixture: ComponentFixture<EnrollCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollCourseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
