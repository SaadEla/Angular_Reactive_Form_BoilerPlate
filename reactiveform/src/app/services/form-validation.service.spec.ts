import { TestBed } from '@angular/core/testing';

import { BuildformService } from './form-validation.service';

describe('BuildformService', () => {
  let service: BuildformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
