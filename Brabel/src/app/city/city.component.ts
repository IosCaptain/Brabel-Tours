import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
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

  constructor() { }

  ngOnInit(): void {
  }

  createNewCard(title: string, body: string) {
    console.log(`Title: ${title} and Body: ${body}`)
    let newCard = {
      id: this.cardsInfo[this.cardsInfo.length - 1].id + 1,
      title: this.title,
      description: this.description,
      url: `/cities/san-francisco/comment/${this.title}`
    }
    console.log(newCard)
    // this.cardsInfo.pop()
    // this.cardsInfo.unshift(newCard)
    this.cardsInfo.push(newCard)
    console.log(this.cardsInfo)
  }
}
