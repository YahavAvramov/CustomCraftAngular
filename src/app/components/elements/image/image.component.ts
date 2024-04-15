import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementsAttribute } from 'src/app/interfaces/elements-attribute';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements ElementsAttribute{

  @Output() imageUrlChange = new EventEmitter<string>();
  
  private _text: string = 'Image';
  @Input() set text(value: string) {
    this._text = value;
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
  
  private _color: string = '#0077cc';
  @Input() set color(value: string) {
    this._color = value;
  }
  
  get color(): string {
    return this._color;
  }
  
     _size: number = 72;
    @Input() set size(value: number) {
      this._size = value;
    }
  
    get size(): number {
      return this._size;
    }

    _url: string = './assets/image-icon.png';
    @Input() set url(value: string) {
      this._url = value; 
      this.imageUrlChange.emit(this._url);
    }
    
    get url(): string {
      return this._url;
    }

}
