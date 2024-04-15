import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent{

  @Output() selectionChange = new EventEmitter<string>();
  optionForm = new FormControl('');
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

  private _index: number | undefined; 
  set index(value: number | undefined) {
    this._index = value;
  }

  get index(): number | undefined {
    return this._index;
  }

  private _option: string = '' 
  set option(value: string) {
    this._option = value;
  }

  get option(): string {
    return this._option;
  }


  onSelectOption(option: string) {
    this.selectionChange.emit(option);
  }
}
