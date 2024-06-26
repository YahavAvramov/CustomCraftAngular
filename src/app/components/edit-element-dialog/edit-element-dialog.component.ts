import { Component, ComponentRef, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

 
@Component({
  selector: 'app-edit-element-dialog',
  templateUrl: './edit-element-dialog.component.html',
  styleUrls: ['./edit-element-dialog.component.scss']
})
export class EditElementDialogComponent {
  optionForm = new FormControl('');
  sizeForm = new FormControl();
  @Output() sizeChanged = new EventEmitter<number>();
  @Output() colorChanged = new EventEmitter<string>();
  @Output() textChanged = new EventEmitter<string>();
  @Output() urlChanged = new EventEmitter<string>();
  sizes:Array<number>;
  element: ComponentRef<Component>; 
elementSize: number;
elementColor: string;
elementText: string;
elementUrl: string;
isElementContainUrl = false;
biggerSizeOption = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.isElementContainUrl = data.isElementContainUrl;
    this.element = data.element; 
    this.elementSize =  data.fontSize;
    this.elementColor = data.color;
    this.elementText = data.text;
    this.elementUrl = data.url;
    this.biggerSizeOption = data.biggerSizeOption;

    if(!this.biggerSizeOption){
      this.sizes = [5, 5.5, 6, 6.5, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    }
    else{
      this.sizes = [48, 72, 96, 120, 144, 192, 288, 384, 480, 576, 720, 864, 1008, 1152, 1296];
    }

  }

  onSizeChange(size: number) {
    this.sizeChanged.emit(size);
  }

  onColorChange(color: string) {
    this.colorChanged.emit(color);
  }
  onTextChange(text: string) {
    this.textChanged.emit(text);
  }
  onUrlChange(url: string) {
    this.urlChanged.emit(url);
  }
}
