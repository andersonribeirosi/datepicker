import { Component } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'datepicker';

  datePick: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.datePick = this.calendar.getToday();
  }

  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  weekStart = 0;
}

