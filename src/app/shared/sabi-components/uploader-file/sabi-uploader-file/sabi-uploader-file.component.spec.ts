import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiUploaderFileComponent} from './sabi-uploader-file.component';

describe('SabiUploaderFileComponent', () => {
  let component: SabiUploaderFileComponent;
  let fixture: ComponentFixture<SabiUploaderFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiUploaderFileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiUploaderFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
