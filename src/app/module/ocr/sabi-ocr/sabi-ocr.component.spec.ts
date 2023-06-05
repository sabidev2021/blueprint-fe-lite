import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiOcrComponent } from './sabi-ocr.component';

describe('SabiOcrComponent', () => {
  let component: SabiOcrComponent;
  let fixture: ComponentFixture<SabiOcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiOcrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
