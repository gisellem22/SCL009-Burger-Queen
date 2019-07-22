import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Menu } from 'src/app/menu';
import { MenuJson } from 'src/app/mock-menu';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }
  
  getMenu(): Observable<Menu[]> {
    return of(MenuJson);
  }
  
}


