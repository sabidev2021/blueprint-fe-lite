import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiBreadcrumbComponent } from './sabi-breadcrumb.component';

describe('SabiBreadcrumbComponent', () => {
  let component: SabiBreadcrumbComponent;
  let fixture: ComponentFixture<SabiBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
