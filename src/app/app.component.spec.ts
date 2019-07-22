import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SCL009-Burger-Queen'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SCL009-Burger-Queen');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to SCL009-Burger-Queen!');
  });
});

// export class PedidoModel {
//   id: 'number';
//   nombre: 'string';
//   price: 'number';
//   esta: 'boolean';

//   constructor() {
//     this.esta = true;
//   }
// }

// export var modelsjsonMenu = {
//   menusDesayuno: [
//     {
//       id: '1',
//       name: 'cafe americano',
//       price: '500'
//     },
//     {
//       id: '2',
//       name: 'cafe con leche',
//       price: '700'
//     },
//     {
//       id: '3',
//       name: 'Sandwich de jamón y queso',
//       price: '1000'
//     },
//     {
//       id: '4',
//       name: 'jugo natural',
//       price: '700'
//     }
//   ]
// };
// 'menusAlmuerzo';
// [
//   {
//     id: '5',
//     name: 'hamburguesa simple',
//     price: '1500'
//   },
//   {
//     id: '6',
//     name: 'hamburguesa doble',
//     price: '2500'
//   },
//   {
//     id: '7',
//     name: 'bebida chica',
//     price: '700'
//   },
//   {
//     id: '8',
//     name: 'bebida grande',
//     price: '1000'
//   },
//   {
//     id: '9',
//     name: 'agua chica',
//     price: '500'
//   },
//   {
//     id: '10',
//     name: 'agua grande',
//     price: '800'
//   }
// ];

// 'menusAdicionales';
// [
//   {
//     id: '11',
//     name: 'papas fritas',
//     price: '500'
//   },
//   {
//     id: '12',
//     name: 'anillos de cebolla',
//     price: '500'
//   },
//   {
//     id: '13',
//     name: 'huevo',
//     price: '500'
//   },
//   {
//     id: '14',
//     name: 'queso',
//     price: '500'
//   },
//   {
//     id: '15',
//     name: 'hamburgesa res',
//     price: '500'
//   },
//   {
//     id: '16',
//     name: 'hamburguesa pollo',
//     price: '500'
//   },
//   {
//     id: '17',
//     name: 'hamburguesa vegetariana',
//     price: '500'
//   }
// ];
