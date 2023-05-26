import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiButtonsSpinnerComponent} from './sabi-buttons-spinner.component';

describe('SabiButtonsSpinnerComponent', () => {
  let component: SabiButtonsSpinnerComponent;
  let fixture: ComponentFixture<SabiButtonsSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiButtonsSpinnerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiButtonsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
