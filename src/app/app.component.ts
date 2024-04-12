import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonDynamicComponent } from './components/elements/button-dynamic/button-dynamic.component';
import { TitleComponent } from './components/elements/title/title.component';
import { SubtitleComponent } from './components/elements/subtitle/subtitle.component';
import { ImageComponent } from './components/elements/image/image.component';
import { StringComponent } from './components/elements/string/string.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { SelectComponent } from './components/elements/select/select.component';




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
        const title = this.resolver.resolveComponentFactory(TitleComponent);
        const titleComponentRef = this.containerRef.createComponent(title);
        element = (titleComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        break;
      // Subtitle
      case 2:
        const subtitle = this.resolver.resolveComponentFactory(SubtitleComponent);
        const subtitleComponentRef = this.containerRef.createComponent(subtitle);
        element = (subtitleComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        
        break;
      // Button
      case 3:
        const button = this.resolver.resolveComponentFactory(ButtonDynamicComponent);
        const buttonComponentRef = this.containerRef.createComponent(button);
        element = (buttonComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        break;
      // Image
      case 4:
        const image = this.resolver.resolveComponentFactory(ImageComponent);
        const imageComponentRef = this.containerRef.createComponent(image);
        element = (imageComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        break;
      // String
      case 5:
        const string = this.resolver.resolveComponentFactory(StringComponent);
        const stringComponentRef = this.containerRef.createComponent(string);
        element = (stringComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        break;
      // Inner
      case 6:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
        this.renderer.addClass(element, 'element');
        break;
      // Checkbox
      case 7:
        const checkbox = this.resolver.resolveComponentFactory(CheckboxComponent);
        const checkboxComponentRef = this.containerRef.createComponent(checkbox);
        element = (checkboxComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        break;
      // Select
      case 8:
        const select = this.resolver.resolveComponentFactory(SelectComponent);
        const selectComponentRef = this.containerRef.createComponent(select);
        element = (selectComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        // element = this.renderer.createElement('select');

        // var option1 = document.createElement('option');
        // option1.text = 'Option 1';
        // option1.value = 'value1';
        // element.appendChild(option1);

        // var option2 = document.createElement('option');
        // option2.text = 'Option 2';
        // option2.value = 'value2';
        // element.appendChild(option2);

        // var option3 = document.createElement('option');
        // option3.text = 'Option 3';
        // option3.value = 'value3';
        // element.appendChild(option3);

        // var option4 = document.createElement('option');
        // option4.text = 'Option 4';
        // option4.value = 'value4';
        // element.appendChild(option4);
        // this.renderer.addClass(element, 'element-select');
        break;
      // Multiselect
      case 9:
        element = this.renderer.createElement('select');
        element.setAttribute('multiple', '');

        var option1 = document.createElement('option');
        option1.text = 'Option 1';
        option1.value = 'value1';
        element.appendChild(option1);

        var option2 = document.createElement('option');
        option2.text = 'Option 2';
        option2.value = 'value2';
        element.appendChild(option2);

        var option3 = document.createElement('option');
        option3.text = 'Option 3';
        option3.value = 'value3';
        element.appendChild(option3);

        var option4 = document.createElement('option');
        option4.text = 'Option 4';
        option4.value = 'value4';
        element.appendChild(option4);
        this.renderer.addClass(element, 'element-select');
        break;
      // Date select
      case 10:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
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
      // Add more cases for other element types as needed
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
