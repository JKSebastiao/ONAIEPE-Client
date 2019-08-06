import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRegisterAdminComponent } from './new-register-admin.component';


describe('GraduatesComponent', () => {
  let component: NewRegisterAdminComponent;
  let fixture: ComponentFixture<NewRegisterAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRegisterAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegisterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
