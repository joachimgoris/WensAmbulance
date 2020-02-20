import { TestBed } from '@angular/core/testing';

import { TokenInformationService } from './token-information.service';

describe('TokenInformationService', () => {
  let service: TokenInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
