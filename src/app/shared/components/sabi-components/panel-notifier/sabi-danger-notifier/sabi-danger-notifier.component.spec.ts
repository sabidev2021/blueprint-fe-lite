import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiDangerNotifierComponent} from './sabi-danger-notifier.component';

describe('DangerNotifierComponent', () => {
  let component: SabiDangerNotifierComponent;
  let fixture: ComponentFixture<SabiDangerNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiDangerNotifierComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiDangerNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
