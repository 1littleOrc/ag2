import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-module',
  templateUrl: './countdown-module.component.html',
  styleUrls: ['./countdown-module.component.css']
})
export class CountdownModuleComponent implements OnInit {
  private now;
  private summerDay;
  private distance;
  public days;
  constructor() {
    this.summerDay = new Date("Jan 5, 2018 15:37:25").getTime();
    this.now = new Date().getTime();
    this.distance = this.summerDay - this.now;
    this.days =Math.floor(this.distance / (1000 * 60 * 60 * 24));
   }

  ngOnInit() {
  }

}
