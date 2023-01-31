import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
