import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/menu'
import { MenuService } from 'src/app/services/menu.service'

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  menus: Menu[];

  filterType(menuType: string) {
  this.getMenu();
   this.menus = this.menus.filter(element => {
      return element.type === menuType})
  }

  clickMessage = '';

  filterBreakFast(menuType: string) {
    this.filterType(menuType);
  }
  filterPrincipal(menuType: string) {
    this.filterType(menuType);
  }
  filterBevarage(menuType: string) {
    this.filterType(menuType);
  }

  selectedMenu: Menu;

  onSelect(menu: Menu): void {
  this.selectedMenu = menu;
  console.log(menu)
}
  
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }
  
  getMenu(): void {
    this.menuService.getMenu()
        .subscribe(menu => this.menus = menu);
  }
}
