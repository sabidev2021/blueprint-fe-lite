import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiDropdownComponent } from './sabi-dropdown.component';

describe('SabiDropdownComponent', () => {
  let component: SabiDropdownComponent;
  let fixture: ComponentFixture<SabiDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
