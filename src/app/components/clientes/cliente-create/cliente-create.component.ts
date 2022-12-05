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
            this.alertService.error(element.message + '  ' + element.field);
            console.log(deuZebra);
          });
          //Retornando somente uma linha de erro e exibindo
        } else {
          this.alertService.error(deuZebra.error.message);
          console.log(deuZebra);
        }
      })
  }

  ngOnInit(): void {
  }

}
