import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'digital-clock-app';
  public date;
  public showTime;
  constructor() {}
  ngOnInit() {
    this.showTime = setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
