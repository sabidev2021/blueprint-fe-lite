import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiTagComponent } from './sabi-tag.component';

describe('SabiTagComponent', () => {
  let component: SabiTagComponent;
  let fixture: ComponentFixture<SabiTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
