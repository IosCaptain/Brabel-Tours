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

  @Output() searchEvent = new EventEmitter<string>()

  ngOnInit(): void {
  }


  findPost(searchQuery: string) {
    console.log(this.cardsInfo)
    for (let i=0; i<this.cardsInfo.length; i++) {
      if (this.cardsInfo[i].title.includes(searchQuery)) {
        this.searchResults.push(this.cardsInfo[i])
      }
    } console.log(this.searchResults)

  }
  sendSearchResults() {
    this.searchEvent.emit(this.searchResults)
  }

}
