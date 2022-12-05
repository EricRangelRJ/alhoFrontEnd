import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientePostDTO } from 'src/app/dto/cliente/clientePostDTO';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  //Objeto sendo inicializado para receber os parâmetros do form no HTML
  cliente: ClientePostDTO = {
    idCliente: null,
    nome: '',
    cpf: '',
    dataNascimento: '',
    telefone1: '',
    telefone2: '',
    email: '',
    numero: '',
    complemento: '',
    condominio: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    logradouro: '',
    observacao: '',
  }

  //Cliente MOCK para testes de preenchimento rápido sem passar pelo Form
  clienteMock: ClientePostDTO = {
    idCliente: null,
    nome: 'Eric Rangel',
    cpf: '10624022781',
    dataNascimento: '1985-08-09',
    telefone1: '21965770649',
    telefone2: '21964502562',
    email: 'ericlsrangel@gmail.com',
    numero: '180',
    complemento: 'casa 77',
    condominio: 'Coelho da Rocha',
    bairro: 'Rocha Sobrinho',
    cidade: 'Mesquita',
    estado: 'RJ',
    cep: '26572520',
    logradouro: 'Rua Meriti',
    observacao: 'Rua do hospital da mãe',
  }

  constructor(
    private _formBuilder: FormBuilder,
    private service: ClienteService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;

  create(): void {

    console.log(this.cliente)

    this.service.create(this.cliente).subscribe(
      () => {
        console.log(this.cliente);
        this.alertService.success('Cliente cadastrado com sucesso');
        this.router.navigate(['clientes']);
      },
      deuZebra => {
        //Se retornar um vetor de erros exibe todos os erros
        if (deuZebra.error.errors) {
          deuZebra.error.errors.forEach(element => {
            console.log(deuZebra.erro.errors);
            this.alertService.error(element.message + '  ' + element.field);
            this.router.navigate(['clientes']);
          });
          //Retornando somente uma linha de erro e exibindo
        } else {
          console.log(deuZebra.error);
          this.alertService.error(deuZebra.error.message);
          this.router.navigate(['clientes']);
        }
      })
  }

  ngOnInit(): void {
  }

}
