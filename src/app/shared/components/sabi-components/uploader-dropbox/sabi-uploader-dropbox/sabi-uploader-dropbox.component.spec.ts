import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiUploaderDropboxComponent} from './sabi-uploader-dropbox.component';

describe('SabiUploaderDropboxComponent', () => {
  let component: SabiUploaderDropboxComponent;
  let fixture: ComponentFixture<SabiUploaderDropboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiUploaderDropboxComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiUploaderDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
