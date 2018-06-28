import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/tolbar.component';
import { CardComponent } from './components/card/card.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { WeekComponent } from './components/week/week.component';

@NgModule({
  // Componente, pipes o directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent, FechaPipe, WeekComponent
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
