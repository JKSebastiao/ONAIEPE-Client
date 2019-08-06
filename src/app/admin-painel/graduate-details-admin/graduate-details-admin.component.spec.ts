import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateDetailsAdminComponent } from './graduate-details-admin.component';

describe('GraduateDetailsComponent', () => {
  let component: GraduateDetailsAdminComponent;
  let fixture: ComponentFixture<GraduateDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduateDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
