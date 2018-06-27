import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';

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

  constructor(service: MenuService) {
    service.loadMenu().subscribe(x => this.data = x);
  }
}
