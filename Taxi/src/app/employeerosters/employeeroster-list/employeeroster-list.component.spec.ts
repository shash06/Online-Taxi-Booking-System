import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerosterListComponent } from './employeeroster-list.component';

describe('EmployeerosterListComponent', () => {
  let component: EmployeerosterListComponent;
  let fixture: ComponentFixture<EmployeerosterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerosterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
