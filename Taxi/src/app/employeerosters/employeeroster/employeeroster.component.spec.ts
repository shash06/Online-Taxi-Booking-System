import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerosterComponent } from './employeeroster.component';

describe('EmployeerosterComponent', () => {
  let component: EmployeerosterComponent;
  let fixture: ComponentFixture<EmployeerosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
