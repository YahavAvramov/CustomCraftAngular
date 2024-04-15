import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {

  @Output() selectionChange = new EventEmitter<Array<string>>();
  optionForm = new FormControl('');
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

  private _index: number | undefined; 
  set index(value: number | undefined) {
    this._index = value;
  }

  get index(): number | undefined {
    return this._index;
  }

  private _optionsSelected: Array<string> = []; 
  set optionsSelected(value: Array<string>) {
    this._optionsSelected = value;
  }

  get optionsSelected(): Array<string> {
    return this._optionsSelected;
  }

  onSelectOption(event: MatSelectChange) {
    const selectedOptions = event.value;  // Array of selected options
    this.selectionChange.emit(selectedOptions);  
  }
  
}
