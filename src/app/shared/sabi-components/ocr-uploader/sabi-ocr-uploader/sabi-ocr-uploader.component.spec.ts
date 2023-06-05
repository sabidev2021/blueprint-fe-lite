import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiOcrUploaderComponent } from './sabi-ocr-uploader.component';

describe('SabiOcrUploaderComponent', () => {
  let component: SabiOcrUploaderComponent;
  let fixture: ComponentFixture<SabiOcrUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiOcrUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiOcrUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
