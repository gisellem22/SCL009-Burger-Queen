import { Menu } from 'src/app/menu'

export class ORDER {
    public id: number;
    public name: string;
    public order: Menu[];
    public total: number;
      constructor(id: number,name: string, order:Menu[],total:number) {
          this.id = id,
          this.name = name,
          this.order = order,
          this.total = total

      }
  }