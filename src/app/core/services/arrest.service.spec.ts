import { TestBed, inject } from '@angular/core/testing';

import { ArrestService } from './arrest.service';

describe('ArrestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrestService]
    });
  });

  it('should be created', inject([ArrestService], (service: ArrestService) => {
    expect(service).toBeTruthy();
  }));
});
