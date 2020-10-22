import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progreso1 = 50;
  progreso2 = 50;

  get getProgreso1(): any {
    return `${this.progreso1}%`;
  }
  get getProgreso2(): any {
    return `${this.progreso2}%`;
  }
  cambioValorHijo(valor: number): any {
    console.log('heyy' + valor);
  }
}
