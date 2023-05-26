import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiLoadingOverlayComponent } from './sabi-loading-overlay.component';

describe('SabiLoadingOverlayComponent', () => {
  let component: SabiLoadingOverlayComponent;
  let fixture: ComponentFixture<SabiLoadingOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiLoadingOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiLoadingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
