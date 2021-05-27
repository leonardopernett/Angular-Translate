import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: (http:HttpClient) => {
          return new TranslateHttpLoader(http)
        },
        deps:[ HttpClient ] 
      }
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
