import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementsAttribute } from 'src/app/interfaces/elements-attribute';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements ElementsAttribute {

  @Output() textChange = new EventEmitter<string>();

  private _text: string = 'Write your subtitle here';
  
@Input() set text(value: string) {
  this._text = value;
  this.textChange.emit(this._text);
}

get text(): string {
  return this._text;
}

  private _index: number | undefined; 
set index(value: number | undefined) {
  this._index = value;
}

get index(): number | undefined {
  return this._index;
}


private _color: string = '#2c7873';
@Input() set color(value: string) {
  this._color = value;
}

get color(): string {
  return this._color;
}

   _size: number = 24;
  @Input() set size(value: number) {
    this._size = value;
  }

  get size(): number {
    return this._size;
  }

}
