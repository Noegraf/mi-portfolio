import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // 👈 Habilita las animaciones
    ...(appConfig.providers || []) // 👈 Agrega otros providers si existen en appConfig
  ]
}).catch(err => console.error(err));
