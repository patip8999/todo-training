import { TestBed } from '@angular/core/testing';

import { OnasService } from './onas.service';

describe('OnasService', () => {
  let service: OnasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
