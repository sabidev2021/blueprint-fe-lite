import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiDatePickerComponent } from './sabi-date-picker.component';

describe('SabiDatePickerComponent', () => {
  let component: SabiDatePickerComponent;
  let fixture: ComponentFixture<SabiDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
