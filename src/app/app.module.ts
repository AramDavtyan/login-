import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./components/home/home.module";
import {LoginModule} from "./components/login/login.module";
import {LogoutModule} from "./components/logout/logout.module";
import {RegisterModule} from "./components/register/register.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LogoutModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
