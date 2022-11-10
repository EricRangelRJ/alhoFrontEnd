import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PedidosListComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Codigo', 'Data', 'Cliente', 'Valor'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  Cliente: string;
  Codigo: number;
  Data: string;
  Valor: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Codigo: 1,
    Cliente: 'Eric Leonardo Santos Rangel',
    Data: '02/09/2022',
    Valor: '15,00',
    description: 'Aqui na linha expandida serão exibidos outros dados detalhados do pedido.',
  },
  {
    Codigo: 2,
    Cliente: 'Enzo Davi da Costa Rangel',
    Data: '06/09/2022',
    Valor: '30,00',
    description: 'Aqui na linha expandida serão exibidos outros dados detalhados do pedido.',
  },
  {
    Codigo: 3,
    Cliente: 'Eloá da Costa Rangel',
    Data: '09/09/2022',
    Valor: '20,00',
    description: 'Aqui na linha expandida serão exibidos outros dados detalhados do pedido.',
  },
  {
    Codigo: 4,
    Cliente: 'Bruna Nunes da Costa Rangel',
    Data: '02/11/2022',
    Valor: '35,00',
    description: 'Aqui na linha expandida serão exibidos outros dados detalhados do pedido.',
  },
  
];
