import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuDrawerComponent } from './components/side-menu-drawer/side-menu-drawer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonDynamicComponent } from './components/elements/button-dynamic/button-dynamic.component';
import { TitleComponent } from './components/elements/title/title.component';
import { SubtitleComponent } from './components/elements/subtitle/subtitle.component';
import { ImageComponent } from './components/elements/image/image.component';
import { StringComponent } from './components/elements/string/string.component';
import { InnerComponent } from './components/elements/inner/inner.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { SelectComponent } from './components/elements/select/select.component';
import { DateComponent } from './components/elements/date/date.component';
import { UploadeFileComponent } from './components/elements/uploade-file/uploade-file.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MultiSelectComponent } from './components/elements/multi-select/multi-select.component';
import { EditElementDialogComponent } from './components/edit-element-dialog/edit-element-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';






@NgModule({
  declarations: [
    AppComponent,
    SideMenuDrawerComponent,
    ButtonDynamicComponent,
    TitleComponent,
    SubtitleComponent,
    ImageComponent,
    StringComponent,
    InnerComponent,
    CheckboxComponent,
    SelectComponent,
    DateComponent,
    UploadeFileComponent,
    MultiSelectComponent,
    EditElementDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDatepickerModule,    
    MatNativeDateModule,
    MatButtonModule,
   MatDialogModule,
   BrowserModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
