import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  data: Menu[] = [];

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500)
      .pipe(
        map(() => {

          if (this.data.length === 0) {
            this.data = [
              {
                chef: 'Dario Ch', date: new Date(),
                img: 'http://www.pqs.pe/sites/default/files/styles/852x479/public/2017/07/actualidad/pqs-negocio-de-comidas.jpg?itok=5y9amxW9'
              },
              {
                chef: 'Simon Ch', date: new Date(),
                img: 'http://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2016/02/pescado_1.jpg'
              },
              {
                chef: 'Carlos Ch', date: new Date(),
                img: 'http://www.pqs.pe/sites/default/files/styles/852x479/public/2017/07/actualidad/pqs-negocio-de-comidas.jpg?itok=5y9amxW9'
              },
              {
                chef: 'Monica Ch', date: new Date(),
                img: 'http://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2016/02/pescado_1.jpg'
              },
              {
                chef: 'Camilo Ch', date: new Date(),
                img: 'http://www.pqs.pe/sites/default/files/styles/852x479/public/2017/07/actualidad/pqs-negocio-de-comidas.jpg?itok=5y9amxW9'
              },
              {
                chef: 'Juana Ch', date: new Date(),
                img: 'http://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2016/02/pescado_1.jpg'
              }
            ];
          }

          return this.data;
        })
      );
  }

  addMenu(menu: Menu) {
    this.data.splice(0, 0, menu);
  }
}

export class Menu {
  constructor(public img: string, public chef: string, public date: Date) { }
}
