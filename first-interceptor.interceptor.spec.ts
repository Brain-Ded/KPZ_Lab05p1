import { TestBed } from '@angular/core/testing';

import { FirstInterceptorInterceptor } from './first-interceptor.interceptor';

describe('FirstInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FirstInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FirstInterceptorInterceptor = TestBed.inject(FirstInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
