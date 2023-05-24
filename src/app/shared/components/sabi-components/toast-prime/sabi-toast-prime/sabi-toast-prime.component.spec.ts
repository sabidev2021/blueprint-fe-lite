import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiToastPrimeComponent } from './sabi-toast-prime.component';

describe('SabiToastPrimeComponent', () => {
  let component: SabiToastPrimeComponent;
  let fixture: ComponentFixture<SabiToastPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiToastPrimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiToastPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
