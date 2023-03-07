import { TestBed } from '@angular/core/testing';

import { VerifyPaymentService } from './verify-payment.service';

describe('VerifyPaymentService', () => {
  let service: VerifyPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
