import { Component, OnInit } from '@angular/core';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { AuthenticationService } from 'src/app/authentication.service';

@Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
   faUser: IconDefinition = faUser;
   userName!: string;

   constructor(public authenticationService: AuthenticationService) {}

   ngOnInit() {
      this.userName = this.authenticationService.getUserInfo().name;
   }

   logoutHandler() {
      this.authenticationService.logout();
   }
}
