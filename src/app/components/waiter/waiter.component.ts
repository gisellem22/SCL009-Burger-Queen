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

  total=0;

  constructor(
    private menuService: MenuService
  ) {

  }

  ngOnInit() {
    this.order= new ORDER(0,"denisse", [],0);
  }
  
  
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
  this.order.order.push(menu);
 
  this.total = 0;

  this.selectedMenu.forEach(element => {
    this.total = this.total + (element.price);
  });
  
  this.order.total = this.total;

}

onDelete(menu: Menu): void {
  const index: number = this.selectedMenu.indexOf(menu);
    if (index !== -1) {
        this.selectedMenu.splice(index, 1);
    }
    this.total = 0;
    this.selectedMenu.forEach(element => {
      this.total = this.total + element.price;
    });
}
// add(name: string): void {
//   this.order.name = name;
//     };
  
  getMenu(): void {
    this.menuService.getMenu()
        .subscribe(menu => this.menus = menu);
  }

  sendOrder(name: string): void {
    this.order.name = name;
    console.log("ORDER:", this.order)
  }
}
