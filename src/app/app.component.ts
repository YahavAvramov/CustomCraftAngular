import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonDynamicComponent } from './components/elements/button-dynamic/button-dynamic.component';
import { TitleComponent } from './components/elements/title/title.component';
import { SubtitleComponent } from './components/elements/subtitle/subtitle.component';
import { ImageComponent } from './components/elements/image/image.component';
import { StringComponent } from './components/elements/string/string.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { SelectComponent } from './components/elements/select/select.component';
import { InnerComponent } from './components/elements/inner/inner.component';
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
  public editMode: boolean = true; 
  @ViewChild('container', { static: true }) container: ElementRef | undefined;
  @ViewChild('container', { read: ViewContainerRef }) containerRef!: ViewContainerRef;


  constructor(private renderer: Renderer2 , public dialog: MatDialog , private cdr: ChangeDetectorRef ) {}

  addElementToGrid(event: number): void {
    let element: HTMLElement;

    // Determine the type of element based on the element Id
    switch (event) {
      // Title
      case 1:
        const titleComponentRef = this.containerRef.createComponent(TitleComponent);
        element = titleComponentRef.location.nativeElement;
        element.style.color = '#808080';
        element.style.fontSize = '36px';
        element.addEventListener('click', () => {
          this.openDialog(element);
        });
        break;
      // Subtitle
      case 2:
        const subtitleComponentRef = this.containerRef.createComponent(SubtitleComponent);
        element = subtitleComponentRef.location.nativeElement; 
        element.style.fontSize = '24px';
        element.style.color = '#2c7873';
        element.addEventListener('click', () => {
          this.openDialog(element);
        });
        break;
      // Button
      case 3:
        const buttonComponentRef = this.containerRef.createComponent(ButtonDynamicComponent);
        element = buttonComponentRef.location.nativeElement;
        element.style.width = '24px';
        element.style.backgroundColor = '#007bff';
        element.classList.add('button'); 
        
        element.addEventListener('click', () => {
          this.openDialog(element);
        });
        break;
      // Image
      case 4:
      const imageComponentRef = this.containerRef.createComponent(ImageComponent);
      element = imageComponentRef.location.nativeElement; 
        break;
      // String
      case 5:
      const stringComponentRef = this.containerRef.createComponent(StringComponent);
      element = stringComponentRef.location.nativeElement; 
      element.style.fontSize = '24px';
      element.style.color = '#2c7873';
      element.addEventListener('click', () => {
        this.openDialog(element);
      });
        break;
      // Inner
      case 6:
      const innerComponentRef = this.containerRef.createComponent(InnerComponent);
      element = innerComponentRef.location.nativeElement; 
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
      // Uploade file
      case 11:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
        break;
      // Digital Signature Field
      case 12:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
        break;

      default:
        console.error('Invalid element type:', event);
        return;
    }
    if (this.container) {
      this.renderer.appendChild(this.container.nativeElement, element);
    }
  }

  openDialog(element: HTMLElement) {
    
    const dialogRef = this.dialog.open(EditElementDialogComponent, {
      position: {
        bottom: '50px',
      },
      data: { element: element }
    });
    dialogRef.componentInstance.sizeChanged.subscribe((size: number) => {
      element.style.fontSize = size + 'px';
      this.cdr.detectChanges(); 
      console.log('Size changed:', size);
    });
    
    dialogRef.componentInstance.colorChanged.subscribe((color: string) => {
      element.style.color = color;
      this.cdr.detectChanges(); 
      console.log('Color changed:', color);
    });
    
    dialogRef.componentInstance.textChanged.subscribe((text: string) => {
      element.innerText = text;
      this.cdr.detectChanges(); 
      console.log('Text changed:', text);
      // Add the cdkDrag attribute back to the element
      this.renderer.setAttribute(element, 'cdkDrag', '');
    });

    dialogRef.componentInstance.urlChanged.subscribe((url: string) => {
      element.setAttribute('href', url);
      this.cdr.detectChanges(); 
      console.log('URL changed:', url);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
  }
}
