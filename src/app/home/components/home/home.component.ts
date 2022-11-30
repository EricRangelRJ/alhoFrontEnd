import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  anoAtual: any;

  constructor() { }

  ngOnInit(): void {

  //Fornece o ano atual
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  this.anoAtual = anoAtual;
  console.log(anoAtual);

  }

}


