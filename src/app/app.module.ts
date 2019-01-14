import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { AppComponent } from './app.component';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { UrlseguraPipe } from './pipes/urlsegura.pipe';
import { ShowPassPipe } from './pipes/show-pass.pipe';
import { KeyArrayPipe } from './pipes/key-array.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    UrlseguraPipe,
    ShowPassPipe,
    KeyArrayPipe
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
