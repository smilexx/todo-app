import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let localStore: Record<string, string | null> = {};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key]:null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value + '')
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should token be null', () => {
    expect(service.token).toBe(null);
  })

  it('should token be string', () => {
    localStorage.setItem('token', 'test')
    expect(service.token).toBe('test');
  })
});
