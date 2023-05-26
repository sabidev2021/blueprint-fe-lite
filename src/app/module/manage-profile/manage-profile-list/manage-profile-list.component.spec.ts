import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfileListComponent } from './manage-profile-list.component';

describe('ManageProfileListComponent', () => {
  let component: ManageProfileListComponent;
  let fixture: ComponentFixture<ManageProfileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProfileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
