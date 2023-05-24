import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderClassicComponent} from './header-classic.component';

describe('HeaderClassicComponent', () => {
  let component: HeaderClassicComponent;
  let fixture: ComponentFixture<HeaderClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderClassicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
