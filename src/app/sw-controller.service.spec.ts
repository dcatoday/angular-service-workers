import { TestBed } from '@angular/core/testing';

import { SwControllerService } from './sw-controller.service';

describe('SwControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwControllerService = TestBed.get(SwControllerService);
    expect(service).toBeTruthy();
  });
});
