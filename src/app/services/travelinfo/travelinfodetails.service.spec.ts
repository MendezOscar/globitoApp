import { TestBed } from '@angular/core/testing';

import { TravelinfodetailsService } from './travelinfodetails.service';

describe('TravelinfodetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelinfodetailsService = TestBed.get(TravelinfodetailsService);
    expect(service).toBeTruthy();
  });
});
