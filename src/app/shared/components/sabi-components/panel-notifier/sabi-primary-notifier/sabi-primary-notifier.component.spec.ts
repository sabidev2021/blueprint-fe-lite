import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiPrimaryNotifierComponent} from './sabi-primary-notifier.component';

describe('SabiPrimaryNotifierComponent', () => {
  let component: SabiPrimaryNotifierComponent;
  let fixture: ComponentFixture<SabiPrimaryNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiPrimaryNotifierComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiPrimaryNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
