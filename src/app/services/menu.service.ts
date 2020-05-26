import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from 'src/app/menu';
import { MenuJson } from 'src/app/mock-menu';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { ORDER } from '../order';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  orderCollection: AngularFirestoreCollection<ORDER>;
  order: Observable<ORDER[]>;
  orderDoc: AngularFirestoreDocument<ORDER>;



  constructor(public afs:AngularFirestore) { 
    
// Lectura de la coleccion "order" en Firestore
this.orderCollection = this.afs.collection('order');  //Inicia la coleccion

this.order = this.orderCollection.snapshotChanges().pipe(map((changes => {
  return changes.map(a => {
    const data = a.payload.doc.data() as ORDER;
    data.idFireStore = a.payload.doc.id;
        console.log(data);
    return data;    
});
})
));
}

    /* Funcion que es llamada por kitchen.component.ts.
     Mediante los metodos de firebase irá leyendo la coleccion que creo
     el mesero y nos retornará la orden */
 getOrders() {
  this.orderCollection = this.afs.collection('order');   // Si elimino este codigo, kitchen aparece vacío
  this.order = this.orderCollection.snapshotChanges().pipe(map((changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as ORDER;
      data.idFireStore = a.payload.doc.id;
          console.log(data);
      return data;    
  });
  })
  ));
    return this.order; 
  }
 

  /* Funcion para agregar la orden a la coleccion mediante el metodo "add"
   la entregamos con esa estructura de objeto */

  addOrder(order2 : ORDER) {   // el "order2" es porque tenia tope con los diferntes order
    
    this.orderCollection.add(
                            {   id : order2.id,
                                idFireStore : '',
                                name : order2.name,
                                order : order2.order, 
                                total : order2.total 
                              }
                                
                              )
  }

  /* Elimina el pedido en kitchen. Para esto es necesario usar el ID que me entrega
  firestore y así eliminarlo desde esta base de datos */
  deleteOrder(order: ORDER) {
    this.orderDoc = this.afs.doc(`order/${order.idFireStore}`);
    this.orderDoc.delete();
      // .then( _ => alert('te quedaste sin comida'))
      // .catch(_ => alert('no pude eliminar'));
  }
    

  /*Funcion del mesero que utiliza nuestro archivo JSON*/ 
  getMenu(): Observable<Menu[]> {
    return of(MenuJson);
  }
  
}


