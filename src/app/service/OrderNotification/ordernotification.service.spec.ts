import { TestBed } from '@angular/core/testing';

import { OrdernotificationService } from './ordernotification.service';

describe('OrdernotificationService', () => {
  let service: OrdernotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdernotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
