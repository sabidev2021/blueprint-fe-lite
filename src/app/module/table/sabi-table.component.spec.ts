import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiTableComponent } from './sabi-table.component';

describe('SabiTableComponent', () => {
  let component: SabiTableComponent;
  let fixture: ComponentFixture<SabiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
