import { TestBed, inject } from '@angular/core/testing';

import { ConstitutionService } from './constitution.service';

describe('ConstitutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstitutionService]
    });
  });

  it('should be created', inject([ConstitutionService], (service: ConstitutionService) => {
    expect(service).toBeTruthy();
  }));
});
