import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeekService {

  constructor() { }

  loadWeek(): Observable<Day[]> {
    return timer(500)
      .pipe(
        map(() => [
          {chef: 'Dario C', menu: ['Cordon Blue', 'Steak pimienta', 'Chicharron']},
          {chef: 'Jauno', menu: ['MEnu 2', 'Menu 4', 'Menu 8']},
          {chef: 'Maria', menu: ['Menu 3']},
          {chef: 'Carlos', menu: ['Menu 6', 'Menu 9', 'Menu 10', 'Menu 12']},
          {chef: 'Mariana', menu: ['Menu5', 'Menu 7']}
        ])
      );
  }
}

export class Day {
  constructor(public chef: string, public menu: string[]) { }
}
