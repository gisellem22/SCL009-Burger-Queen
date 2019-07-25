import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Menu } from 'src/app/menu';
import { MenuJson } from 'src/app/mock-menu';

import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class MenuService {
  menusCollection: AngularFirestoreCollection<Menu>;
  menus: Observable<Menu[]>;
  menuDoc: AngularFirestoreDocument<Menu>;

  constructor(public afs:AngularFirestore) { 
    this.menusCollection = this.afs.collection('menus');
    this.menus = this.menusCollection.snapshotChanges().pipe(map((changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Menu;
      console.log(data);
        return data;
        
    });
    })
    ));
    }

 getMenus() {
    return this.menus; 
  }
 
  addMenu(menu: Menu) {
    this.menusCollection.add(menu);
  }

  updateMenu(menu: Menu) {
    this.menuDoc = this.afs.doc(`menus/${menu.id}`);
    this.menuDoc.update(menu);
  }

  getMenu(): Observable<Menu[]> {
    return of(MenuJson);
  }
  
}


