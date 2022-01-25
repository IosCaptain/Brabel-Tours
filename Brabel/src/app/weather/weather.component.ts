import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from './search.service'
@Component({
  selector: 'app-search',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  zip: string = '';
  weather: any;
  city: string = '';
  searchSubject = new Subject();

  constructor(private searchService: SearchService) {}

ngOnInit(): void {
  this.searchSubject
  .pipe(debounceTime(1000), distinctUntilChanged())
  .subscribe(zip => {
    
    this.searchService.createAPIObservable(zip)
    .subscribe(response => this.weather = response);
  })
}

  findWeather(zip:string){
    this.searchSubject.next(zip);
  
    

}

}

