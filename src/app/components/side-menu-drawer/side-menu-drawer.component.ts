import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from 'src/app/models/option';
import { AppServiceService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-side-menu-drawer',
  templateUrl: './side-menu-drawer.component.html',
  styleUrls: ['./side-menu-drawer.component.scss'],
})
export class SideMenuDrawerComponent implements OnInit {
  showSubMenu: boolean;
  menuOptions$: Observable<Array<Option>> | undefined;
  @Output() typeIdOutput: EventEmitter<number> = new EventEmitter<number>();
  activeMenuItemIndex: number = -1;

  constructor(private service: AppServiceService) {
    this.showSubMenu = false;
  }

  ngOnInit(): void {
    this.menuOptions$ = this.service.getSubMenuOptions();
  }

  toggleSubMenu(index: number): void {
    if (this.activeMenuItemIndex === index) {
      this.activeMenuItemIndex = -1; // Close the sub-menu if it's already open
    } else {
      this.activeMenuItemIndex = index;
    }
  }

  isSubMenuOpen(index: number): boolean {
    return this.activeMenuItemIndex === index;
  }
  toggleMenu() {
    console.log(this.showSubMenu);
    this.showSubMenu = !this.showSubMenu;
  }
  //Here I send the selected element to the parent component to add it
  addElementToGrid(typeId: number) {
    this.typeIdOutput.emit(typeId);
  }
}
