import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderBackofficeComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderBackofficeComponent;
  let fixture: ComponentFixture<HeaderBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBackofficeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
