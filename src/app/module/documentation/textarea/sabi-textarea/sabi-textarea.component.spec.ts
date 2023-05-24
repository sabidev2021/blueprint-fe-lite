import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiTextareaComponent } from './sabi-textarea.component';

describe('SabiTextareaComponent', () => {
  let component: SabiTextareaComponent;
  let fixture: ComponentFixture<SabiTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
