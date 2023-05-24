import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiRadioButtonComponent } from './sabi-radio-button.component';

describe('SabiRadioButtonComponent', () => {
  let component: SabiRadioButtonComponent;
  let fixture: ComponentFixture<SabiRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
