import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SabiTitleMenuComponent} from './sabi-title-menu.component';

describe('SabiTitleMenuComponent', () => {
  let component: SabiTitleMenuComponent;
  let fixture: ComponentFixture<SabiTitleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiTitleMenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiTitleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
