// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { AppModule } from './app/app.module';

// bootstrapApplication(AppModule, appConfig).catch((err) => console.error(err));
// // bootstrapApplication(AppComponent, appConfig).catch((err) =>
// //   console.error(err)
// // );

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Make sure the path is correct

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
