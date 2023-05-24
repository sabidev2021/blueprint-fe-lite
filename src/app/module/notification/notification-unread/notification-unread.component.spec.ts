import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotificationUnreadComponent} from './notification-unread.component';

describe('NotificationUnreadComponent', () => {
  let component: NotificationUnreadComponent;
  let fixture: ComponentFixture<NotificationUnreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationUnreadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
