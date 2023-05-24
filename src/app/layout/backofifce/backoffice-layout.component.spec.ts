import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BackOfficeLayoutComponent} from './backoffice-layout.component';

describe('DashboardLayoutComponent', () => {
  let component: BackOfficeLayoutComponent;
  let fixture: ComponentFixture<BackOfficeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackOfficeLayoutComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
