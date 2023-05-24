import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiTextfieldComponent } from './sabi-textfield.component';

describe('SabiTextfieldComponent', () => {
  let component: SabiTextfieldComponent;
  let fixture: ComponentFixture<SabiTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiTextfieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
