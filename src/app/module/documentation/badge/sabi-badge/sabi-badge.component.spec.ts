import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiBadgeComponent } from './sabi-badge.component';

describe('SabiBadgeComponent', () => {
  let component: SabiBadgeComponent;
  let fixture: ComponentFixture<SabiBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
