import { Component } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'datepicker';
  model: NgbDateStruct;
  fromDate: NgbDate | null;
  date: {year: number, month: number};
  toDate: NgbDate | null;

  constructor(private calendar: NgbCalendar) {
    this.toDate = calendar.getPrev(calendar.getToday(), 'd', 7)
    this.fromDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  
  ngOnInit() {
  }
  
}

