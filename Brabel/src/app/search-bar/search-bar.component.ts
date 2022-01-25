import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']

})
export class SearchBarComponent implements OnInit {
  searchQuery: any = '';
  searchResults: any = []
  @Input() cardsInfo: any;
  constructor() { }

  @Output() searchEvent = new EventEmitter<any>()

  ngOnInit(): void {
  }


  findPost(searchQuery: string) {
    console.log(this.cardsInfo)
    for (let i=0; i<this.cardsInfo.length; i++) {
      //Checking the title for objects that include the search query
      if (this.cardsInfo[i].title.includes(searchQuery)) {
        this.searchResults.push(this.cardsInfo[i])
        //Sending the event to the parent
        this.searchEvent.emit(this.searchResults)
      }
      //Checking the description for objects that include the search query
      else if (this.cardsInfo[i].description.includes(searchQuery)) {
        this.searchResults.push(this.cardsInfo[i])
        //Sending the event to the parent
        this.searchEvent.emit(this.searchResults)
      }

    } console.log(this.searchResults)

  }

}
