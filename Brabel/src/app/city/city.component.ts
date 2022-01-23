import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  title: string = '';
  body: string = '';
  cardsInfo = [
    {
      id: 1,
      title: 'title1',
      description: 'description1'
    },
    {
      id: 2,
      title: 'title2',
      description: 'description2'
    },
    {
      id: 3,
      title: 'title3',
      description: 'description3'
    },
    {
      id: 4,
      title: 'title4',
      description: 'description4'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  createNewCard(title: string, body: string) {
    console.log(`Title: ${title} and Body: ${body}`)

  }

}
