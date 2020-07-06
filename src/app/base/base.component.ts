import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  cities: {
    title: string;
    desc: string;
    isOpen: boolean;
  }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cities.push({
      title: 'title',
      desc: 'A-HAHAHAHAHA!',
      isOpen: false,
    });
    this.cities.push({
      title: 'title2title2title2title2title2title2title2title2title2title2',
      desc: 'A-HAHAHAHAHA!!',
      isOpen: false,
    });
    this.cities.push({
      title: 'title3 title3 title3 title3 title3 title3 title3 title3',
      desc: 'A-HAHAHAHAHA!<br>A-HAHAHAHAHA!!<br>A-HAHAHAHAHA!!!',
      isOpen: true,
    });
    this.cities.push({
      title: 'title4',
      desc: 'Hello!<br>Hello!!<br>Hello!!!',
      isOpen: false,
    });
  }
}
