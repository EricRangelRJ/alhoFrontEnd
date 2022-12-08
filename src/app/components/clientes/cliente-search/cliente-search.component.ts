import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteRequestDTO } from 'src/app/dto/cliente/clienteRequestDTO';
import { ClienteResponseDTO } from 'src/app/dto/cliente/clienteResponseDTO';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cliente-search',
  templateUrl: './cliente-search.component.html',
  styleUrls: ['./cliente-search.component.scss']
})
export class ClienteSearchComponent implements OnInit {

  cliente: ClienteResponseDTO = {

    idCliente: '',
    nome: '',
    cpf: '',
    dataNascimento: '',
    telefone1: '',
    telefone2: '',
    email: '',
    observacao: '',
    endereco: null,
  }

  constructor(
    private service: ClienteService,
    private router: Router,
    //Pega o parâmetro da rota
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
     
    //Sempre que iniciar o componente UPDATE ele o id passado por parâmetro na rota.
      this.cliente.idCliente = this.route.snapshot.paramMap.get('id');
      //Busca automática ao iniciar o componente
      this.findByid();
    }
  

  findByid(): void {
    //Passando o  parâmetro da rota para o método  no service e preenchendo o objeto com a resposta.
    this.service.findById(this.cliente.idCliente).subscribe(resposta => {
      this.cliente = resposta;
    })
  }

}
