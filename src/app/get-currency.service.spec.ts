import { TestBed } from '@angular/core/testing';

import { GetCurrencyService } from './get-currency.service';

describe('GetCurrencyService', () => {
  let service: GetCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
