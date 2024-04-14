import { Component, Input, OnInit } from '@angular/core';
import { ElementsAttribute } from 'src/app/interfaces/elements-attribute';

@Component({
  selector: 'app-button-dynamic',
  templateUrl: './button-dynamic.component.html',
  styleUrls: ['./button-dynamic.component.scss']
})
export class ButtonDynamicComponent implements ElementsAttribute {

  private _text: string = 'Click me';
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

    private _url: string = '';

    @Input() set url(value: string) {
      this._url = value; 
    }
    
    get url(): string {
      return this._url;
    }
}
