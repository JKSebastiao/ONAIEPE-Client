import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRegisterDetailsAdminComponent } from './new-register-details-admin.component';


describe('GraduateDetailsComponent', () => {
  let component: NewRegisterDetailsAdminComponent;
  let fixture: ComponentFixture<NewRegisterDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRegisterDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegisterDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
