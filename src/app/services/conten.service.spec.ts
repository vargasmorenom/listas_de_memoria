import { TestBed } from '@angular/core/testing';

import { ContenService } from './conten.service';

describe('ContenService', () => {
  let service: ContenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
