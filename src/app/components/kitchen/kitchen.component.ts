import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/menu'
import { MenuService } from 'src/app/services/menu.service'

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'], 

})
export class KitchenComponent implements OnInit {

  menus: Menu[];

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenus().subscribe(menus =>{
      this.menus = menus; 
    });
  }

}
