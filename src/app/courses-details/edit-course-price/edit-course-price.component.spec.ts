import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoursePriceComponent } from './edit-course-price.component';

describe('EditCoursePriceComponent', () => {
  let component: EditCoursePriceComponent;
  let fixture: ComponentFixture<EditCoursePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCoursePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoursePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
