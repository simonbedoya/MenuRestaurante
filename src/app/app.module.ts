import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/tolbar.component';
import { CardComponent } from './components/card/card.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { WeekComponent } from './components/week/week.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { Routes, RouterModule } from '@angular/router';
import { NotForundComponent } from './pages/not-forund/not-forund.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'agregar', component: AddPageComponent },
  { path: '**', component: NotForundComponent}
  // { path: 'menu/:id'}
];

@NgModule({
  // Componente, pipes o directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent, FechaPipe, WeekComponent, AddPageComponent, ListPageComponent, NotForundComponent
  ],
  // Importamos modulos
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  // Sericios (singleton) disponibles en el modulo
  providers: [],
  // Componente que se ejecuta primero
  bootstrap: [AppComponent],
  // Compoentes, pipes, directivas o servicios se exportan
  exports: []
})
export class AppModule { }
