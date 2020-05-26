import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

  title: string;
  
  order:ORDER;

  total=0;

  inputclient: string = "";

  selectedMenu: Menu[] = [];

  clickMessage = '';

 

  constructor( private menuService: MenuService ) {}

  ngOnInit() {
    this.order= new ORDER(0,"denisse", [],0);
  }
  
  filterType(menuType: string) {
  this.getMenu();
   this.menus = this.menus.filter(element => {
      return element.type === menuType})
      console.log(this.menus);
      
  }

  filterBreakFast(menuType: string) {
    this.title = 'DESAYUNO';
    this.filterType(menuType);
  }
  filterPrincipal(menuType: string) {
    this.title = 'PRINCIPAL';
    this.filterType(menuType);
  }
  filterBevarage(menuType: string) {
    this.title = 'LÍQUIDOS';
    this.filterType(menuType);
  }


  onSelect(menu: Menu): void {
  this.order.order.push(menu);
  this.selectedMenu = this.order.order;
 
  this.total = 0;

  this.selectedMenu.forEach(element => {
    this.total = this.total + (element.price);
  });
  
  this.order.total = this.total;
}

onDelete(menu: Menu): void {
  const index: number = this.order.order.indexOf(menu);
    if (index !== -1) {
        this.order.order.splice(index, 1);
    }
    this.total = 0;
    this.order.order.forEach(element => {
      this.total = this.total + element.price;
    });
}
  
  getMenu(): void {
    this.menuService.getMenu()
        .subscribe(menu => this.menus = menu);                                                                                                                                                                     
  }

  
  sendOrder(name: string): void {
    this.order.name = name;
    console.log(this.order.order);
    if (name.length === 0 || /^\s*$/.test(name)) {
      Swal.fire({
        title: 'Informa nombre del Cliente',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      if (this.order.order.length > 0) {
        this.menuService.addOrder(this.order); 
        //  this.order.name = '';
         this.menus =[];
         this.total = 0;
         this.inputclient=' ';
         this.order.order = [];
         this.selectedMenu = [];
         Swal.fire({
          title: 'Pedido Enviado',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
        })
      } else {
        Swal.fire({
          title: 'Completa el pedido',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000
        })
        
      }
    }
    
   /*llamar a la funncion del servicio, para indicarle que debe enviar esta orden 
   escogida a firebase*/
   
   }

}
