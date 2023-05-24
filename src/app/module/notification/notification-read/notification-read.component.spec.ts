import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReadComponent } from './notification-read.component';

describe('NotificationReadComponent', () => {
  let component: NotificationReadComponent;
  let fixture: ComponentFixture<NotificationReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
