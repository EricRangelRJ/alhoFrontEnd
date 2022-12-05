import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modelo } from 'src/app/models/modelo';

@Component({
  selector: 'app-card-listar',
  templateUrl: './card-listar.component.html',
  styleUrls: ['./card-listar.component.scss']
})
export class CardListarComponent implements OnInit {

  //Parâmetros passados ao chamar o card-listar
  @Input() tituloFormulario: string;
  @Input() rotaBotaoIncluir: string;

  constructor() { }

  ngOnInit(): void {
  }

}
