import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiAlertComponent } from './sabi-alert.component';

describe('SabiAlertComponent', () => {
  let component: SabiAlertComponent;
  let fixture: ComponentFixture<SabiAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
