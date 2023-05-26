import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SabiBreadcrumbsComponent} from './sabi-breadcrumbs.component';

describe('SabiBreadcrumbComponent', () => {
  let component: SabiBreadcrumbsComponent;
  let fixture: ComponentFixture<SabiBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabiBreadcrumbsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
