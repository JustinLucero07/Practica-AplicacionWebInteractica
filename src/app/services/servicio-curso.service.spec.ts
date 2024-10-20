import { TestBed } from '@angular/core/testing';

import { ServicioCursoService } from './servicio-curso.service';

describe('ServicioCursoService', () => {
  let service: ServicioCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
