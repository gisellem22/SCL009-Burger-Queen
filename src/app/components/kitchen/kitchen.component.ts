import { Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service'
import { ORDER } from 'src/app/order';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'], 

})
export class KitchenComponent implements OnInit {
  
  orders : ORDER[];
  lottieConfig: Object;
  isLoaded: boolean;

  constructor(public menuService: MenuService) {
    this.lottieConfig = {
      path: '../../../assets/3196-star-badge.json',
      
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  this.isLoaded = false;
   }

  ngOnInit() {
      this.menuService.getOrders().subscribe(order =>{
      this.orders = order; 
      this.isLoaded = true;
    });
  }

  /*Elimina el ID de Firestore */
  deleteOrder(order:ORDER) {
    Swal.fire({
      title: 'Seguro que deseas cerrar el pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7952b3',
      cancelButtonColor: '#7952b3',
      confirmButtonText: 'Cerrar Pedido'
    }).then((result) => {
      if (result.value) {
        this.menuService.deleteOrder(order);
      }
    })
  }
}
