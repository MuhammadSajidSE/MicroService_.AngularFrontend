import { TestBed } from '@angular/core/testing';

import { OrderpaymentService } from './orderpayment.service';

describe('OrderpaymentService', () => {
  let service: OrderpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
