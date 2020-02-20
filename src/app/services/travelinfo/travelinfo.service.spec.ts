import { TestBed } from '@angular/core/testing';

import { TravelinfoService } from './travelinfo.service';

describe('TravelinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelinfoService = TestBed.get(TravelinfoService);
    expect(service).toBeTruthy();
  });
});
