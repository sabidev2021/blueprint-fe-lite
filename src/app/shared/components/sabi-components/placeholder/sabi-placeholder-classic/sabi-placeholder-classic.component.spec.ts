import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiPlaceholderClassicComponent} from './sabi-placeholder-classic.component';

describe('SabiPlaceholderSingleComponent', () => {
  let component: SabiPlaceholderClassicComponent;
  let fixture: ComponentFixture<SabiPlaceholderClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiPlaceholderClassicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiPlaceholderClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
