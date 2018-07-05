import { Component } from '@angular/core';

@Component({
  // Etiqueta para utilizar el componente
  selector: 'app-root',
  // la ruta del archivo de template
  // templateUrl: './app.component.html',
  // las rutas de los archivos de estilos
  // styleUrls: ['./app.component.css'],
  // Sericios (singleton) disponibles a partir de este nivel
  providers: [],
  // Template del componente
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { }
