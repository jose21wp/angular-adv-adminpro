import { Component, Input } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() titulo = 'Sin Titulo';

  @Input('labels') doughnutChartLabels: Label[] = [
    'labels 1',
    'labels 1',
    'labels 1',
  ];
  @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];

  public colors: Color[] = [
    {
      backgroundColor: ['#6867E6', '#009FEE', '#F02059'],
    },
  ];
}
