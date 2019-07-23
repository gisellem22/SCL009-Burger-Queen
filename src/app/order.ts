import { Menu } from 'src/app/menu'

export class ORDER {
    public id: number;
    public name: string;
    public order: Menu;
      constructor(id: number,name: string, order:Menu) {
          this.id = id,
          this.name = name,
          this.order = order
      }
  }