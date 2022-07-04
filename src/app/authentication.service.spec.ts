import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
   let service: AuthenticationService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(AuthenticationService);
   });

   it('should return correct authenticated status', () => {
      service.login();
      expect(service.authenticated).toBeTrue();

      service.logout();
      expect(service.authenticated).toBeFalse();

      expect(service.isAuthenticated()).toBeFalse();
   });
});
