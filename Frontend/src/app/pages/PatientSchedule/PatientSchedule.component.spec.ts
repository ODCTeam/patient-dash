import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientScheduleComponent } from './immobiliers-for-sale.component';

describe('PatientScheduleComponent', () => {
  let component: PatientScheduleComponent;
  let fixture: ComponentFixture<PatientScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
