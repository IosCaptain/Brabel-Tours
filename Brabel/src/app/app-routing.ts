import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {CityComponent} from "./city/city.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes :Routes = [
  {
    path: 'cities/san-francisco',
    component: CityComponent,
  },
  // {
  //   path: "**",
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
