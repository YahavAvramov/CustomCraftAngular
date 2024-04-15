import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent  {

  @Output() dateChange = new EventEmitter<Date>();
  private _index: number | undefined; 
  set index(value: number | undefined) {
    this._index = value;
  }

  get index(): number | undefined {
    return this._index;
  }

  private _date: Date = new Date();
  set date(value: Date) {
    this._date = value;
  }

  get date(): Date {
    return this._date;
  }

  onDateInput(event: any) {
    const selectedDate = (event.value as Date); // Type casting to Date
    this.dateChange.emit(selectedDate);
  }



}
