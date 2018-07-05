import { Component, OnInit } from '@angular/core';
import { MenuService, Menu } from '../../services/menu.service';
import { Day } from '../../services/week.service';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  title = 'Simon';
  data: Menu[] = [];
  dataWeek: Day[] = [];
  loading = false;

  constructor(serviceMenu: MenuService, public router: Router, public route: ActivatedRoute) {
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

  goToAdd() {
    this.router.navigate(['agregar'], { relativeTo: this.route });
  }

}
