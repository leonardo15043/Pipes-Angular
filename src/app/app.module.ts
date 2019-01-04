import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { AppComponent } from './app.component';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { UrlseguraPipe } from './pipes/urlsegura.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    UrlseguraPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
