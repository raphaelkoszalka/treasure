import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public backgroundStyles: object;
  public ready: boolean;

  constructor() {
    this.ready = false;
  }

  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    // cover images enum
    const coverMap: object = {
      0: './assets/cover/0.jpg',
      1: './assets/cover/1.jpg',
      2: './assets/cover/2.jpg',
      3: './assets/cover/3.jpg'
    };

    // cover background styles object to apply with [ngStyle]
    this.backgroundStyles = {
      'background-image': 'url(' + coverMap[HomeComponent.getRandomInt(0, 3)] + ')',
      // 'background-image': 'url(' + coverMap[1] + ')',
      'background-size': 'cover',
      '-webkit-background-size': 'cover',
      'background-position': 'center center',
      'background-color': 'lightblue'
    };

    setTimeout(() => this.ready = true, 340);
  }

}
