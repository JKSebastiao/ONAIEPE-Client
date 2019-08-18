import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GraduatesAdminComponent } from './offers-admin.component';


describe('GraduatesComponent', () => {
  let component: GraduatesAdminComponent;
  let fixture: ComponentFixture<GraduatesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduatesAdminComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
