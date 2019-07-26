import { Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service'
import { ORDER } from 'src/app/order';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'], 

})
export class KitchenComponent implements OnInit {

 orders : ORDER[];

  constructor(public menuService: MenuService) {
   }

  ngOnInit() {
      this.menuService.getOrders().subscribe(order =>{
      this.orders = order; 
    });
  }

  /*Elimina el ID de Firestore */
  deleteOrder(order:ORDER) {
    const response = confirm('¿Quieres eliminar esta orden?');
    if (response ) {
      this.menuService.deleteOrder(order);
    }
    return;
  }
}
