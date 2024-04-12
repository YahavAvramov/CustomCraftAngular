import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonDynamicComponent } from './components/elements/button-dynamic/button-dynamic.component';
import { TitleComponent } from './components/elements/title/title.component';
import { SubtitleComponent } from './components/elements/subtitle/subtitle.component';
import { ImageComponent } from './components/elements/image/image.component';
import { StringComponent } from './components/elements/string/string.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { SelectComponent } from './components/elements/select/select.component';
import { InnerComponent } from './components/elements/inner/inner.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { DateComponent } from './components/elements/date/date.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  title = 'custom_craft_angular';
  public editMode: boolean = true; 
  @ViewChild('container', { static: true }) container: ElementRef | undefined;
  @ViewChild('container', { read: ViewContainerRef }) containerRef!: ViewContainerRef;


  constructor(private renderer: Renderer2 , private cdr: ChangeDetectorRef , private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.addCdkDragToDraggableElements();
  }
  addElementToGrid(event: number): void {
    let element: HTMLElement;

    // Determine the type of element based on the element Id
    switch (event) {
      // Title
      case 1:
        const titleComponentRef = this.containerRef.createComponent(TitleComponent);
        element = titleComponentRef.location.nativeElement;
        break;
      // Subtitle
      case 2:
        const subtitleComponentRef = this.containerRef.createComponent(SubtitleComponent);
        element = subtitleComponentRef.location.nativeElement; 
        break;
      // Button
      case 3:

      const buttonComponentRef = this.containerRef.createComponent(ButtonDynamicComponent);
      element = buttonComponentRef.location.nativeElement; 
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
    element.classList.add('draggable');
    if (this.container) {
      this.renderer.appendChild(this.container.nativeElement, element);
     // this.addCdkDragToDraggableElements();
      this.cdr.detectChanges();

    }
  }
  
  addCdkDragToDraggableElements(): void {
    const draggableElements = document.querySelectorAll('.draggable') as NodeListOf<HTMLElement>;
    draggableElements.forEach((element: HTMLElement) => {
      element.setAttribute('cdkDrag', '');
    });
  }


  
  
  
  
  
}
