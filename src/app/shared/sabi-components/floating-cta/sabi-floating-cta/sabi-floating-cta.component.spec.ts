import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiFloatingCtaComponent} from './sabi-floating-cta.component';

describe('SabiFloatingCtaComponent', () => {
  let component: SabiFloatingCtaComponent;
  let fixture: ComponentFixture<SabiFloatingCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiFloatingCtaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiFloatingCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
