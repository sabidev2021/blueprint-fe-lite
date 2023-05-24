import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiShimmerComponent } from './sabi-shimmer.component';

describe('SabiShimmerComponent', () => {
  let component: SabiShimmerComponent;
  let fixture: ComponentFixture<SabiShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
