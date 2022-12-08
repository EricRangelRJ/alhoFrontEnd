import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  
    //Parâmetros passados ao chamar o card-listar
    @Input() tituloFormulario: string;
    @Input() rotaBotaoIncluir: string;

  constructor() { }

  ngOnInit(): void {
  }

}
