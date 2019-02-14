import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkUserComponent } from './link-user/link-user.component';
import { ReposService } from './repos.service';

@NgModule({
  declarations: [
    AppComponent,
    LinkUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }