import { TestBed } from '@angular/core/testing';

import { TecnicoService } from './tecnico.service';

describe('TecnicoService', () => {
  let service: TecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
