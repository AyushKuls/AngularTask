/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from 'app/app-route';

bootstrapApplication(AppComponent,
    {providers: [provideRouter(APP_ROUTE), provideProtractorTestingSupport(), provideAnimations()]})
  .catch(err => console.error(err));
