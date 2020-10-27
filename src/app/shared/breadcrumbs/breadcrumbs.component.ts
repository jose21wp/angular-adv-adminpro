import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent {
  titulo: string;
  tituloSub$ = Subscription;
  constructor(private router: Router) {
    this.tituloSub$ = this.getRoutes().subscribe((data: any) => {
      this.titulo = data.titulo;
      document.title = `AdminPro ${data.titulo}`;
    });
  }

  getRoutes(): any {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
