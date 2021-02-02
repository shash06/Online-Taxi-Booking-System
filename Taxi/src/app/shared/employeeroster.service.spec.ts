import { TestBed } from '@angular/core/testing';

import { EmployeerosterService } from './employeeroster.service';

describe('EmployeerosterService', () => {
  let service: EmployeerosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeerosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
