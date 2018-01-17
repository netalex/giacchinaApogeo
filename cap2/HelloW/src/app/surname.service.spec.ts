import { TestBed, inject } from '@angular/core/testing';

import { SurnameService } from './surname.service';

describe('SurnameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurnameService]
    });
  });

  it('should be created', inject([SurnameService], (service: SurnameService) => {
    expect(service).toBeTruthy();
  }));
});
