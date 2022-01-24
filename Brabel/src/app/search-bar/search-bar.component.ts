import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

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
