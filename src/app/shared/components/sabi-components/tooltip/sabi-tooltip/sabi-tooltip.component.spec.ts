import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiTooltipComponent} from './sabi-tooltip.component';

describe('SabiTooltipComponent', () => {
  let component: SabiTooltipComponent;
  let fixture: ComponentFixture<SabiTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiTooltipComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
