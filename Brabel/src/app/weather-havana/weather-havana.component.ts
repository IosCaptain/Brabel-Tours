import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from './search.service'

@Component({
  selector: 'app-weather-havana',
  templateUrl: './weather-havana.component.html',
  styleUrls: ['./weather-havana.component.css']
})
export class WeatherHavanaComponent implements OnInit {

  zip: string = '';
  weather: any;
  searchSubject = new Subject();
 

  constructor(private searchService: SearchService) {}

ngOnInit(): void {
  this.searchSubject
  .pipe(debounceTime(1000), distinctUntilChanged())
  .subscribe(zip => {
    
    this.searchService.createAPIObservableHavana(zip)
    .subscribe(response => this.weather = response);

  })

}

 findWeather(zip:string){
    this.searchSubject.next(zip);
}


}
