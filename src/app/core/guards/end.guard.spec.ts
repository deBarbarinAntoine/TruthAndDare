import { TestBed } from '@angular/core/testing';

import { EndGuard } from './end.guard';

describe('EndGuard', () => {
  let guard: EndGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EndGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
