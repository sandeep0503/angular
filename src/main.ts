import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
export function getBaseUrl(){
  return"http://hsp.krishnasmartsystem.com/api_project/public/api"
}
const Providers=[
  {
    provide:'BaseUrl', useFactory : getBaseUrl, deps:[]
  }
]

platformBrowserDynamic(Providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
