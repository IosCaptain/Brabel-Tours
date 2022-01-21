import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  city: string = '';


  constructor(private http: HttpClient) { }

  findCity(city: string) {
    this.http.get(`https://wft-geo-db.p.rapidapi.com`, ).subscribe(response => {
      console.log(response)
    })
  }

  ngOnInit(): void {

  }

}
