import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiOverlayComponent } from './sabi-overlay.component';

describe('SabiOverlayComponent', () => {
  let component: SabiOverlayComponent;
  let fixture: ComponentFixture<SabiOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
