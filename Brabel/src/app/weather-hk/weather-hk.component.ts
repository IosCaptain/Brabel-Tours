import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from './search.serviceHK';

@Component({
  selector: 'app-weather-hk',
  templateUrl: './weather-hk.component.html',
  styleUrls: ['./weather-hk.component.css']
})
export class WeatherHkComponent implements OnInit {

  zip: string = '';
  weather: any;
  searchSubject = new Subject();
 

  constructor(private searchService: SearchService) {}

ngOnInit(): void {
  this.searchSubject
  .pipe(debounceTime(1000), distinctUntilChanged())
  .subscribe(zip => {
    
    this.searchService.createAPIObservableHK(zip)
    .subscribe(response => this.weather = response);

  })

}

 findWeather(zip:string){
    this.searchSubject.next(zip);
}
}
