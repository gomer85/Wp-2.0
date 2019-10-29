import { TestBed } from '@angular/core/testing';

import { GetSportIdService } from './get-sport-id.service';

describe('GetSportIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSportIdService = TestBed.get(GetSportIdService);
    expect(service).toBeTruthy();
  });
});
