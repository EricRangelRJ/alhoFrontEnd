import { TestBed } from '@angular/core/testing';

import { VendedoresService } from './vendedores.service';

describe('VendedoresService', () => {
  let service: VendedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
