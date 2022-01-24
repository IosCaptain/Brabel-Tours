import {Component} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  homeRoute: any;

  constructor(private route: Router) {
    this.homeRoute = route;
    console.log(this.homeRoute)
  }
}
