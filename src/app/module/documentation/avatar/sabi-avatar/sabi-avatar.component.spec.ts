import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiAvatarComponent } from './sabi-avatar.component';

describe('SabiAvatarComponent', () => {
  let component: SabiAvatarComponent;
  let fixture: ComponentFixture<SabiAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
