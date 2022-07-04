import { Injectable } from '@angular/core';

import { fakeUser, User, USER_INFO } from 'src/constants';

@Injectable({
   providedIn: 'root',
})
export class AuthenticationService {
   authenticated!: boolean;
   userInfo: User = fakeUser;

   login() {
      this.authenticated = true;

      localStorage.setItem(USER_INFO, JSON.stringify(fakeUser));
   }

   logout() {
      this.authenticated = false;

      if (localStorage.getItem(USER_INFO)) {
         localStorage.removeItem(USER_INFO);
      }
   }

   isAuthenticated(): boolean {
      const token = localStorage.getItem(USER_INFO);

      return !!token;
   }

   getUserInfo(): User {
      return this.userInfo;
   }
}
