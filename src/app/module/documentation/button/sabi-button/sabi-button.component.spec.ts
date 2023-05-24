import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiButtonComponent } from './sabi-button.component';

describe('SabiButtonComponent', () => {
  let component: SabiButtonComponent;
  let fixture: ComponentFixture<SabiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
