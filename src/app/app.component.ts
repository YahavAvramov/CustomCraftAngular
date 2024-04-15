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
import { AppServiceService } from './service/app-service.service';
import { url } from 'inspector';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';




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

  constructor(private renderer: Renderer2 , public dialog: MatDialog, private service: AppServiceService) {}

  addElementToGrid(event: number): void {
    let element: HTMLElement;

    // Determine the type of element based on the element Id
    switch (event) {
      // Title
      case 1:
        const titleComponentRef = this.containerRef.createComponent(TitleComponent);
        element = titleComponentRef.location.nativeElement;
        
        // Store the index alongside the title component reference
        const indexTitle = this.service.stringArray.length;
        titleComponentRef.instance.index = indexTitle;
        this.service.stringArray.push(titleComponentRef.instance.text);
    
        // Add event listener for textChange event
        titleComponentRef.instance.textChange.subscribe(() => {
            // Update the value at the stored index with new text
            this.service.stringArray[indexTitle] = titleComponentRef.instance.text;
        });
        element.addEventListener('click', () => {
            this.openDialog(titleComponentRef);
        });
        break;
      // Subtitle
      case 2:
        const subtitleComponentRef = this.containerRef.createComponent(SubtitleComponent);
        element = subtitleComponentRef.location.nativeElement;
    
        // Store the index alongside the subtitle component reference
        const indexSubtitle = this.service.stringArray.length;
        subtitleComponentRef.instance.index = indexSubtitle;
        this.service.stringArray.push(subtitleComponentRef.instance.text);
    
        // Add event listener for textChange event
        subtitleComponentRef.instance.textChange.subscribe(() => {
            // Update the value at the stored index with new text
            this.service.stringArray[indexSubtitle] = subtitleComponentRef.instance.text;
        });
        element.addEventListener('click', () => {
          this.openDialog(subtitleComponentRef);
        });
        break;
      // Button
      case 3:
        const buttonComponentRef = this.containerRef.createComponent(ButtonDynamicComponent);
        element = buttonComponentRef.location.nativeElement;        
        element.addEventListener('click', () => {
          if(this.editMode){
          this.openDialog(buttonComponentRef , true);
          }
          else{
           if(buttonComponentRef.instance.url){
           this.service.sendApiRequest(buttonComponentRef.instance.url).subscribe((data: any) => {
            const dialogRef = this.dialog.open(SuccessDialogComponent, {
              panelClass: 'custom-dialog-container', 
              data: { data: data , url: buttonComponentRef.instance.url }
            });
          
            dialogRef.afterClosed().subscribe(result => {
              // Handle dialog closed event here, if needed
              console.log('Dialog closed with result:', result);
            });
           });
           }
           else{
              console.log('No URL provided');
           }
          }
        });
      
        break;
      // Image
      case 4:
        const imageComponentRef = this.containerRef.createComponent(ImageComponent);
        element = imageComponentRef.location.nativeElement;
    
        // Store the index alongside the image component reference
        const indexImage = this.service.imageUrls.length;
        imageComponentRef.instance.index = indexImage;
    
        // Add event listener for imageUrlChange event
        imageComponentRef.instance.imageUrlChange.subscribe((newImageUrl: string) => {
            // Update the value at the stored index with new image URL
            this.service.imageUrls[indexImage] = newImageUrl;
        });
    
        element.addEventListener('click', () => {
            this.openDialog(imageComponentRef, true, true);
        });
        break;
    
    
      // String
        case 5:
          const stringComponentRef = this.containerRef.createComponent(StringComponent);
           element = stringComponentRef.location.nativeElement; 
          
          // Store the index alongside the string component reference
          const indexString = this.service.stringArray.length;
          stringComponentRef.instance.index = indexString;
          this.service.stringArray.push(stringComponentRef.instance.text);
      
          stringComponentRef.instance.textChange.subscribe(() => {
              // Update the value at the stored index with thenew text
              this.service.stringArray[indexString] = stringComponentRef.instance.text;
          });
          element.addEventListener('click', () => {
            this.openDialog(stringComponentRef);
          });
          break;
      // Checkbox
      case 7:
        const checkboxComponentRef = this.containerRef.createComponent(CheckboxComponent);
         element = checkboxComponentRef.location.nativeElement; 
        // Store the index alongside the checkbox component reference
        const indexCheckbox = this.service.checkedArray.length;
        checkboxComponentRef.instance.index = indexCheckbox;
    
        this.service.checkedArray.push(checkboxComponentRef.instance.checked);
        element.addEventListener('change', () => {
            // update the value at the stored index with new value
        this.service.checkedArray[indexCheckbox] = checkboxComponentRef.instance.checked;
        });
        break;
      // Select
      case 8:
        const selectComponentRef = this.containerRef.createComponent(SelectComponent);
        element = selectComponentRef.location.nativeElement;
    
        // Store the index alongside the select component reference
        const indexSelect = this.service.stringArray.length;
        selectComponentRef.instance.index = indexSelect;
    
        // Push the initial value of the select to stringArray
        this.service.stringArray.push(selectComponentRef.instance.option);
    
        // Add event listener for selectionChange event
        selectComponentRef.instance.selectionChange.subscribe((newValue: any) => {
            // Update the value at the stored index with new selection
            this.service.stringArray[indexSelect] = newValue;
        });
        break;
      // Multiselect
      case 9:
        const multiSelectComponentRef = this.containerRef.createComponent(MultiSelectComponent);
        element = multiSelectComponentRef.location.nativeElement;
    
        // Store the index alongside the multi-select component reference
        const indexMultiSelect = this.service.multiSelectedOptions.length;
        multiSelectComponentRef.instance.index = indexMultiSelect;
    
        // Push the initial value of the multi-select to stringArray
        this.service.multiSelectedOptions.push(multiSelectComponentRef.instance.optionsSelected);
    
        // Add event listener for optionsSelected event
        multiSelectComponentRef.instance.selectionChange.subscribe((selectedOptions: string[]) => {
            // Update the value at the stored index with new selected options
            this.service.multiSelectedOptions[indexMultiSelect] = selectedOptions;
        });
    
        break;
      // Date select
      case 10:
        const dateSelectComponentRef = this.containerRef.createComponent(DateComponent);
        element = dateSelectComponentRef.location.nativeElement;
    
        // Store the index alongside the date select component reference
        const indexDateSelect = this.service.dateSelected.length;
        dateSelectComponentRef.instance.index = indexDateSelect;
    
        // Push the initial value of the date select to dateSelected
        this.service.dateSelected.push(dateSelectComponentRef.instance.date);
    
        // Add event listener for dateChange event
        dateSelectComponentRef.instance.dateChange.subscribe((newDate: Date) => {
            // Update the value at the stored index with new date
            this.service.dateSelected[indexDateSelect] = newDate;
        });
    
        break;
      default:
        console.error('Invalid element type:', event);
        return;
    }
    if (this.container) {
      this.renderer.appendChild(this.container.nativeElement, element);
    }
  }

  openDialog(element: any , isElementContainUrl = false, biggerSizeOption = false) {
    
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
        biggerSizeOption: biggerSizeOption
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
    });
     
  }

}
