import { Component, Input, OnInit } from '@angular/core';
import { ElementsAttribute } from 'src/app/interfaces/elements-attribute';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements ElementsAttribute {

  private _text: string = 'Write your paragraph here';
  @Input() set text(value: string) {
    this._text = value;
  }
  get text(): string {
    return this._text;
  }
  
  
  private _color: string = '#0077cc';
  @Input() set color(value: string) {
    this._color = value;
  }
  
  get color(): string {
    return this._color;
  }
  
     _size: number = 16;
    @Input() set size(value: number) {
      this._size = value;
    }
  
    get size(): number {
      return this._size;
    }

}
