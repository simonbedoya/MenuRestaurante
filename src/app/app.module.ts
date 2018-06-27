import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/tolbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  // Componente, pipes o directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent
  ],
  // Importamos modulos
  imports: [
    BrowserModule
  ],
  // Sericios (singleton) disponibles en el modulo
  providers: [],
  // Componente que se ejecuta primero
  bootstrap: [AppComponent],
  // Compoentes, pipes, directivas o servicios se exportan
  exports: []
})
export class AppModule { }
