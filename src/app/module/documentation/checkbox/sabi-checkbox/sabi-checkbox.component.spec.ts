import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiCheckboxComponent } from './sabi-checkbox.component';

describe('SabiCheckboxComponent', () => {
  let component: SabiCheckboxComponent;
  let fixture: ComponentFixture<SabiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
