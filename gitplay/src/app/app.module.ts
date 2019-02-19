import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkUserComponent } from './link-user/link-user.component';
import { ReposService } from './repos.service';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LinkUserComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService,ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }