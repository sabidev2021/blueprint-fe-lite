import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiDataBindComponent } from './sabi-data-bind.component';

describe('SabiDataBindComponent', () => {
  let component: SabiDataBindComponent;
  let fixture: ComponentFixture<SabiDataBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiDataBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
