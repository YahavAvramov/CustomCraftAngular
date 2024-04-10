import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom_craft_angular';

  @ViewChild('container', { static: true }) container: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  addElementToGrid(event: number): void {
    let element: HTMLElement;

    // Determine the type of element based on the event string
    switch (event) {
      // Title
      case 1:
        element = this.renderer.createElement('h1');
        element.textContent = 'Write here';
        this.renderer.addClass(element, 'element');
        break;
      // Subtitle
      case 2:
        element = this.renderer.createElement('h2');
        element.textContent = 'add your subtitle text here';
        this.renderer.addClass(element, 'element');
        break;
      // Button
      case 3:
        element = this.renderer.createElement('Button');
        element.textContent = 'Click here';
        this.renderer.addClass(element, 'element-button');
        break;
      // Image
      case 4:
        element = this.renderer.createElement('img');
        element.setAttribute('src', './assets/image-icon.png'); // Set the source of the image
        this.renderer.addClass(element, 'element-img');
        break;
      // String
      case 5:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
        break;
      // Inner
      case 6:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
        break;
      // Checkbox
      case 7:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
        break;
      // Select
      case 8:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
        break;
      // Multiselect
      case 9:
        element = this.renderer.createElement('input');
        element.setAttribute('type', 'text');
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
    if (this.container) {
      this.renderer.appendChild(this.container.nativeElement, element);
    }
  }
}
