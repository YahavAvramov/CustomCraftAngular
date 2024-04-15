import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {


private _checked: boolean = false;
 set checked(value: boolean) {
    this._checked = value; 
  }
  
  get checked(): boolean {
    return this._checked;
  }
  private _index: number | undefined; 
  set index(value: number | undefined) {
    this._index = value;
  }

  get index(): number | undefined {
    return this._index;
  }

  onCheckedChange() {
    this.checked = !this.checked;
  }
}
