import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiWordingsComponent} from './sabi-wordings.component';

describe('SabiWordingsComponent', () => {
  let component: SabiWordingsComponent;
  let fixture: ComponentFixture<SabiWordingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiWordingsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiWordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
