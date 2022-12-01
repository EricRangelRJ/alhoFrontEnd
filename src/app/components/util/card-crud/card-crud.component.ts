import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modelo } from 'src/app/models/modelo';

@Component({
  selector: 'app-card-crud',
  templateUrl: './card-crud.component.html',
  styleUrls: ['./card-crud.component.scss']
})
export class CardCrudComponent implements OnInit {

  //Parâmetros passados ao chamar o card-crud
  @Input() tituloFormulario: string;
  @Input() rotaBotaoIncluir: string;

  constructor() { }

  ngOnInit(): void {
  }

}
