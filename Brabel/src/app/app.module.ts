import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CityComponent } from './city/city.component';

import {AppRouting} from "./app-routing";
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HongKongComponent } from './hong-kong/hong-kong.component';
import {HavanaComponent} from "./havana/havana.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherHkComponent } from './weather-hk/weather-hk.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CityComponent,
    HomepageComponent,
    PageNotFoundComponent,
    HongKongComponent,
    HavanaComponent,
    SearchBarComponent,
    WeatherComponent,
    WeatherHkComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
