import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiAccordionComponent } from './sabi-accordion.component';

describe('SabiAccordionComponent', () => {
  let component: SabiAccordionComponent;
  let fixture: ComponentFixture<SabiAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
