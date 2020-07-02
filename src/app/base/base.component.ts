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
  }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cities.push({ title: 'title', desc: 'A-HAHAHAHAHA!' });
    this.cities.push({ title: 'title2', desc: 'A-HAHAHAHAHA!!' });
    this.cities.push({
      title: 'title3',
      desc: 'A-HAHAHAHAHA!<br>A-HAHAHAHAHA!!<br>A-HAHAHAHAHA!!!',
    });
  }
}
