import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
   BrowserAnimationsModule,
   NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuardService } from './auth-guard.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './login-page/login-page.component';
import { NavComponent } from './header/nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { IfAuthenticatedDirective } from './if-authenticated.directive';

import { FilterPipe } from './course-list/filter.pipe';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      LogoComponent,
      LoginComponent,
      NavComponent,
      FilterPipe,
      IfAuthenticatedDirective,
      NotFoundComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      FontAwesomeModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
   ],
   providers: [
      FilterPipe,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MatChipsModule,
      MatIconModule,
      AuthGuardService,
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
