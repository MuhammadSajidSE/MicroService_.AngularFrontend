import { TestBed } from '@angular/core/testing';

import { OrderuserService } from './orderuser.service';

describe('OrderuserService', () => {
  let service: OrderuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
