import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiPlaceholderComponent} from './sabi-placeholder.component';

describe('SabiPlaceholderComponent', () => {
  let component: SabiPlaceholderComponent;
  let fixture: ComponentFixture<SabiPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiPlaceholderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
