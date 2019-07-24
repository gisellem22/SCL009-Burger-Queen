import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/menu'
import { MenuService } from 'src/app/services/menu.service'
import { ORDER } from 'src/app/order'

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  menus: Menu[];
  
  order:ORDER;
  
  
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

  selectedMenu: Menu[] = [];

  onSelect(menu: Menu): void {
  this.selectedMenu.push(menu);
  console.log(menu)
}
  
  constructor(private menuService: MenuService) {
      let holi:Menu
    this.order= new ORDER(2, "giselle", holi);
      this.order.id = 2;
      this.order.name= "giselle";
      console.log(this.order)

   }

  ngOnInit() {
  }
  
  getMenu(): void {
    this.menuService.getMenu()
        .subscribe(menu => this.menus = menu);
  }
}
