import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit{

  //Parâmetros passados ao chamar o card-listar
  @Input() tituloFormulario: string;

  constructor() { }

  ngOnInit(): void {
  }

}
