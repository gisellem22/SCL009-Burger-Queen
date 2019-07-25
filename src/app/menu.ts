export class Menu {
    public id: number;
    public type: string;
    public name: string;
      public price: number;
      constructor(id: number,type: string, nombre:string, precio:number) {
          this.id = id;
          this.type = type;
          this.name = nombre;
          this.price = precio;
      }
  }