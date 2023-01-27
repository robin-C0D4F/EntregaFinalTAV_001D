import { TestBed } from '@angular/core/testing';

import { DessertsService } from './desserts.service';

describe('DessertsService', () => {
  let service: DessertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DessertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
