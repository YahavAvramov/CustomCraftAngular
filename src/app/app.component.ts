import {  ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonDynamicComponent } from './components/elements/button-dynamic/button-dynamic.component';
import { TitleComponent } from './components/elements/title/title.component';
import { SubtitleComponent } from './components/elements/subtitle/subtitle.component';
import { ImageComponent } from './components/elements/image/image.component';
import { StringComponent } from './components/elements/string/string.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { SelectComponent } from './components/elements/select/select.component';
import { MultiSelectComponent } from './components/elements/multi-select/multi-select.component';
import { DateComponent } from './components/elements/date/date.component';
import { EditElementDialogComponent } from './components/edit-element-dialog/edit-element-dialog.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom_craft_angular';
 
  @ViewChild('container', { static: true }) container: ElementRef | undefined;
  @ViewChild('container', { read: ViewContainerRef }) containerRef!: ViewContainerRef;

  _editMode: boolean = true;  
   set editMode(value: boolean) {
    this._editMode = value;
  }

  get editMode(): boolean {
    return this._editMode;
  }

  constructor(private renderer: Renderer2 , public dialog: MatDialog, private cd: ChangeDetectorRef) {}

  addElementToGrid(event: number): void {
    let element: HTMLElement;

    // Determine the type of element based on the element Id
    switch (event) {
      // Title
      case 1:
      const titleComponentRef = this.containerRef.createComponent(TitleComponent);
        element = titleComponentRef.location.nativeElement;
        // element.style.color = '#808080';
        // element.instance.size = 36; 
        element.addEventListener('click', () => {
          this.openDialog(titleComponentRef);
        });
        break;
      // Subtitle
      case 2:
        const subtitleComponentRef = this.containerRef.createComponent(SubtitleComponent);
        element = subtitleComponentRef.location.nativeElement; 
        element.style.fontSize = '24px';
        // element.style.color = '#2c7873';
        element.addEventListener('click', () => {
          this.openDialog(subtitleComponentRef);
        });
        break;
      // Button
      case 3:
        const buttonComponentRef = this.containerRef.createComponent(ButtonDynamicComponent);
        element = buttonComponentRef.location.nativeElement;

        console.log(this._editMode);
        if (!this.editMode) {
          element.addEventListener('click', () => {
            window.open(buttonComponentRef.instance.url, '_blank');
          });
        } else {
        element.addEventListener('click', () => {
          this.openDialog(buttonComponentRef , true);
        });
      }
        break;
      // Image
      case 4:
      const imageComponentRef = this.containerRef.createComponent(ImageComponent);
      element = imageComponentRef.location.nativeElement; 
      element.addEventListener('click', () => {
        this.openDialog(imageComponentRef , true);
      });
        break;
      // String
      case 5:
      const stringComponentRef = this.containerRef.createComponent(StringComponent);
      element = stringComponentRef.location.nativeElement; 
    
      element.addEventListener('click', () => {
        this.openDialog(stringComponentRef);
      });
        break;
      // Checkbox
      case 7:
      const checkboxComponentRef = this.containerRef.createComponent(CheckboxComponent);
      element = checkboxComponentRef.location.nativeElement; 
        break;
      // Select
      case 8:
      const selectComponentRef = this.containerRef.createComponent(SelectComponent);
      element = selectComponentRef.location.nativeElement; 
        break;
      // Multiselect
      case 9:
      const multiSelectComponentRef = this.containerRef.createComponent(MultiSelectComponent);
      element = multiSelectComponentRef.location.nativeElement; 
        break;
      // Date select
      case 10:
      const dateSelectComponentRef = this.containerRef.createComponent(DateComponent);
      element = dateSelectComponentRef.location.nativeElement; 
        break;

      default:
        console.error('Invalid element type:', event);
        return;
    }
    if (this.container) {
      this.renderer.appendChild(this.container.nativeElement, element);
    }
  }

  openDialog(element: any , isElementContainUrl = false) {
    
    const dialogRef = this.dialog.open(EditElementDialogComponent, {
      position: {
        bottom: '50px',
      },
      data: { element: element, 
        isElementContainUrl: isElementContainUrl,
        fontSize: element.instance.size,
        color: element.instance.color,
        text: element.instance.text,
        url: element.instance.url,
       }
    });
    dialogRef.componentInstance.sizeChanged.subscribe((size: number) => {    
      element.instance.size = size; 
    });
    
    dialogRef.componentInstance.colorChanged.subscribe((color: string) => {
      element.instance.color = color;
    });
    
    dialogRef.componentInstance.textChanged.subscribe((text: string) => {
      element.instance.text = text;
    });

    dialogRef.componentInstance.urlChanged.subscribe((url: string) => {
     element.instance.url = url;
     this.cd.detectChanges();
    });  
  }

}
