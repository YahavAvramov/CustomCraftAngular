import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuDrawerComponent } from './components/side-menu-drawer/side-menu-drawer.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiselectComponent } from './components/side-menu-drawer/multiselect/multiselect.component';

@NgModule({
  declarations: [AppComponent, SideMenuDrawerComponent, MultiselectComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
