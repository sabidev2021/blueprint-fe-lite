import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiImageCropComponent } from './sabi-image-crop.component';

describe('SabiImageCropperComponent', () => {
  let component: SabiImageCropComponent;
  let fixture: ComponentFixture<SabiImageCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiImageCropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiImageCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
