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

  addElementToGrid(event: string): void {
    let element: HTMLElement;

    // Determine the type of element based on the event string
    switch (event) {
      case 'Title':
        element = this.renderer.createElement('h1');
        element.textContent = 'Write here';
        this.renderer.addClass(element, 'text-element');
        break;
      case 'Subtitle':
        element = this.renderer.createElement('h2');
        element.textContent = 'add your subtitle text here';
        this.renderer.addClass(element, 'text-element');
        break;
      case 'Button':
        element = this.renderer.createElement('Button');
        element.textContent = 'Click here';
        this.renderer.addClass(element, 'element');
        break;
      case 'Subtitle1':
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
