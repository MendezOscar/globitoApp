import { TestBed } from '@angular/core/testing';

import { CategoryoptionsService } from './categoryoptions.service';

describe('CategoryoptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryoptionsService = TestBed.get(CategoryoptionsService);
    expect(service).toBeTruthy();
  });
});
