import { TestBed } from '@angular/core/testing';

import { PaintRepositoryService } from './paint-repository.service';

describe('PaintRepositoryService', () => {
  let service: PaintRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
