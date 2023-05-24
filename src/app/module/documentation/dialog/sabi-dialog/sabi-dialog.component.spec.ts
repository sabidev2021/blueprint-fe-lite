import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiDialogComponent } from './sabi-dialog.component';

describe('SabiDialogComponent', () => {
  let component: SabiDialogComponent;
  let fixture: ComponentFixture<SabiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
