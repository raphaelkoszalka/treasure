import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showFixed: boolean;

  constructor() {
    this.showFixed = false;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window.scrollY > 100) {
      this.showFixed = true;
      return;
    }
    this.showFixed = false;
  }

}
