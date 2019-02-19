import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkUserComponent } from './link-user/link-user.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    LinkUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
