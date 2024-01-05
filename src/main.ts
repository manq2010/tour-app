import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '../enviroment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

if (environment.production) {
  if (window) {
    window.console.log = function () {};
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
