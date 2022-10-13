import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  //Chama o componente HOME ao iniciar a página principal do sistema
  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}
