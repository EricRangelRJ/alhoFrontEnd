import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteRequestDTO } from 'src/app/dto/cliente/clienteRequestDTO';
import { ClienteResponseDTO } from 'src/app/dto/cliente/clienteResponseDTO';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

  //Objeto sendo inicializado para receber os parâmetros do form no HTML
  cliente: ClienteRequestDTO = {
    idCliente: '',
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
    municipio: '',
    estado: '',
    cep: '',
    logradouro: '',
    observacao: '',
  }

  clienteUpdate: ClienteResponseDTO = {

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

  //Cliente MOCK para testes de preenchimento rápido sem passar pelo Form
  clienteMock: ClienteRequestDTO = {
    idCliente: null,
    nome: 'Bruna Rangel',
    cpf: '10706081730',
    dataNascimento: '1986-02-18',
    telefone1: '21970138204',
    telefone2: '21964502562',
    email: 'brunarangel@gmail.com',
    numero: '180',
    complemento: 'casa 77',
    condominio: 'Coelho da Rocha',
    bairro: 'Rocha Sobrinho',
    municipio: 'Mesquita',
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
    //Pega o parâmetro da rota
    private route: ActivatedRoute,
  ) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.nullValidator],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;

  ngOnInit(): void {
    //Sempre que iniciar o componente UPDATE ele o id passado por parâmetro na rota.
    this.cliente.idCliente = this.route.snapshot.paramMap.get('id');
    //Busca automática ao iniciar o componente
    this.findByid();
  }
  
  findByid(): void {
    //Passando o  parâmetro da rota para o método  no service e preenchendo o objeto com a resposta.
    this.service.findById(this.cliente.idCliente).subscribe(resposta => {
      this.clienteUpdate = resposta;
      this.cliente = this.convertDTO(resposta);
    })
  }

  convertDTO(clienteUpdate: ClienteResponseDTO): ClienteRequestDTO {
   
    let clienteConvertido = new ClienteRequestDTO();
    clienteConvertido.idCliente = clienteUpdate.idCliente;
    clienteConvertido.nome = clienteUpdate.nome;
    clienteConvertido.cpf = clienteUpdate.cpf;
    clienteConvertido.dataNascimento = clienteUpdate.dataNascimento;
    clienteConvertido.telefone1 = clienteUpdate.telefone1;
    clienteConvertido.telefone2 = clienteUpdate.telefone2;
    clienteConvertido.email = clienteUpdate.email;
    clienteConvertido.numero = clienteUpdate.endereco.numero;
    clienteConvertido.complemento = clienteUpdate.endereco.complemento;
    clienteConvertido.condominio = clienteUpdate.endereco.condominio;
    clienteConvertido.bairro = clienteUpdate.endereco.bairro;
    clienteConvertido.municipio = clienteUpdate.endereco.municipio;
    clienteConvertido.estado = clienteUpdate.endereco.estado;
    clienteConvertido.cep = clienteUpdate.endereco.cep;
    clienteConvertido.logradouro = clienteUpdate.endereco.logradouro;
    clienteConvertido.observacao = clienteUpdate.observacao;
    return clienteConvertido;
  }

  update(): void {
    this.cliente = this.convertDTO(this.clienteUpdate);
    this.service.update(this.cliente).subscribe(
      () => {
        console.log(this.cliente);
        console.log("entrouu antes");
        this.alertService.success('Cliente atualizado com sucesso', 'Update');
        this.router.navigate(['clientes']);
      },
      err => {
        //Se retornar um vetor de erros exibe todos os erros
        if (err.error.errors) {
          console.log('entrou no vetor de erros');
          err.error.errors.forEach(element => {
            console.log(element);
            this.alertService.error(element.message + '  ' + element.field);
          });
          //Retornando somente uma linha de erro e exibindo
        } else {
          console.log('retornou somente 1  erro');
          this.alertService.error(err.error.message);
          console.log(err.error);
        }
      })
  }



}
