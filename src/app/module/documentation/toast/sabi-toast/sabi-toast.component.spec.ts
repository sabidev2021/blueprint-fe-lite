import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiToastComponent } from './sabi-toast.component';

describe('SabiToastComponent', () => {
  let component: SabiToastComponent;
  let fixture: ComponentFixture<SabiToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
