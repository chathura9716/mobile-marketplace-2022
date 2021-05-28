import { TestBed } from '@angular/core/testing';

import { DataAccesssService } from './data-accesss.service';

describe('DataAccesssService', () => {
  let service: DataAccesssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccesssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
