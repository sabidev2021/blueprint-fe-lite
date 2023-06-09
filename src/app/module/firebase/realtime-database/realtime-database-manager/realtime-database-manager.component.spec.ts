import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDatabaseManagerComponent } from './realtime-database-manager.component';

describe('RealtimeDatabaseManagerComponent', () => {
  let component: RealtimeDatabaseManagerComponent;
  let fixture: ComponentFixture<RealtimeDatabaseManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeDatabaseManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeDatabaseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
