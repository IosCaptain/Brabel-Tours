import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  //template: `<app-search-bar [cardsInfo]="cardsInfo"></app-search-bar>`
})
export class CityComponent implements OnInit {
  title: string = '';
  description: string = '';
  cardsInfo = [
    {
      id: 1,
      title: 'title1',
      description: 'description1',
      url: `/cities/san-francisco/comment/${this.title}`
    },
    {
      id: 2,
      title: 'title2',
      description: 'description2',
      url: `/cities/san-francisco/comment/${this.title}`
    },
    {
      id: 3,
      title: 'title3',
      description: 'description3',
      url: `/cities/san-francisco/comment/${this.title}`
    },
    {
      id: 4,
      title: 'title4',
      description: 'description4',
      url: `/cities/san-francisco/comment/${this.title}`
    }
  ]
  searchResults: boolean|[] = false;
  constructor() { }

  ngOnInit(): void {
  }

  createNewCard(title: string, body: string) {
    //Creating new card with the information provided by the user
    let newCard = {
      id: 1,
      title: this.title,
      description: this.description,
      url: `/cities/san-francisco/comment/${this.title}`
    }
    //Adjusting the id, the latest addition gets an id of 1 and the rest id+1
    for (let i = 0; i<this.cardsInfo.length; i++) {
      this.cardsInfo[i].id += 1;
    }
    //Adding the object at the top of the array
    this.cardsInfo.unshift(newCard)

    //Testing the search
    this.receiveSearchResults(this.event)
    console.log(this.searchResults)
  }

  receiveSearchResults(event: any) {
    this.searchResults = event
  }

}
