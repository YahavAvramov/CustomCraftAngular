import { Component, EventEmitter, Inject, Output } from '@angular/core';
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
  sizes = [5, 5.5, 6, 6.5, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
  element: HTMLElement; 
elementSize: number;
elementColor: string;
elementText: string;
elementUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.element = data.element; 
    this.elementSize = parseInt(this.element.style.fontSize);

    this.elementUrl = this.element.getAttribute('href') || '';

    this.elementColor = this.rgbToHex(this.element.style.color);
    this.elementText = this.element.innerText;
    console.log(parseInt(this.element.style.fontSize));
    console.log(this.elementColor);
    console.log(this.element.innerText); 
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
  private rgbToHex(rgb: string): string {
    if (!rgb || !rgb.startsWith('rgb')) {
      return '#000000';
    }

    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues || rgbValues.length !== 3) {
      return '#000000'; 
    }

    const hexValues = rgbValues.map(value => {
      const hex = parseInt(value, 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    });
    return '#' + hexValues.join('');
  }

}
