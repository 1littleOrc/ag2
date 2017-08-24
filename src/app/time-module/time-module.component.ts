import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-module',
  templateUrl: './time-module.component.html',
  styleUrls: ['./time-module.component.css']
})
export class TimeModuleComponent implements OnInit {
  private options;
  private date;
  private hourse;
  private minutes;
  private description;
  constructor() {
    this.options  = { year: 'numeric', month: 'long', day: 'numeric' };
    this.date = new Intl.DateTimeFormat('ru-RU', this.options).format(new Date());
    this.hourse = new Date().getHours();
    this.minutes = new Date().getMinutes();
  }
  getTime(hourse) {
    console.log(hourse);
  }


  ngOnInit() {
    switch (true) {
      case this.hourse >= 22 && this.hourse <= 9:
        this.description = 'С утра будет завтрак';
        break;
      case this.hourse >= 9 && this.hourse <= 14:
        this.description = 'Не пропустите обед';
        break;
      case this.hourse >= 14 && this.hourse <= 21:
        this.description = 'Время близится к ужину';
        break;
      default:
        this.description = 'ууупс';
        break;
    }
  }

}
