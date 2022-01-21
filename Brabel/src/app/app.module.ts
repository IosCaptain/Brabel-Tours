import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CityComponent } from './city/city.component';

import {AppRouting} from "./app-routing";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
