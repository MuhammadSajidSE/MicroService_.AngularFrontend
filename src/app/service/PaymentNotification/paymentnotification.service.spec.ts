import { TestBed } from '@angular/core/testing';

import { PaymentnotificationService } from './paymentnotification.service';

describe('PaymentnotificationService', () => {
  let service: PaymentnotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentnotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
