import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerostersComponent } from './employeerosters.component';

describe('EmployeerostersComponent', () => {
  let component: EmployeerostersComponent;
  let fixture: ComponentFixture<EmployeerostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
