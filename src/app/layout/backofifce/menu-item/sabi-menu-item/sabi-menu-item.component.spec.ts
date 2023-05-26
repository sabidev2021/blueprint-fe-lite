import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiMenuItemComponent } from './sabi-menu-item.component';

describe('SabiMenuItemComponent', () => {
  let component: SabiMenuItemComponent;
  let fixture: ComponentFixture<SabiMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
