import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';
import { WeekService, Day } from './services/week.service';
import { finalize } from 'rxjs/operators';

@Component({
  // Etiqueta para utilizar el componente
  selector: 'app-root',
  // la ruta del archivo de template
  templateUrl: './app.component.html',
  // las rutas de los archivos de estilos
  styleUrls: ['./app.component.css'],
  // Sericios (singleton) disponibles a partir de este nivel
  providers: []
  // Template del componente
  // template: ''
})
export class AppComponent {
  title = 'Simon';
  data: Menu[] = [];
  dataWeek: Day[] = [];
  loading = false;

  constructor(serviceMenu: MenuService) {
    this.loading = true;
    serviceMenu.loadMenu()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(x => this.data = x, err => console.log(err));
  }

  showName(menu: Menu) {
    alert(menu.chef);
  }
}
