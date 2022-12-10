import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientePost } from './../../models/cliente-post';
import { Estados } from '../../../util/models/estados';
import { Cliente } from './../../models/cliente';
import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, PatternValidator, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { Location } from '@angular/common';
import { AlertService } from 'src/app/util/services/alert.service';
import { EstadosService } from 'src/app/util/services/estados.service';
import { StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-cad',
  templateUrl: './clientes-cad.component.html',
  styleUrls: ['./clientes-cad.component.scss']
})
export class ClientesCadComponent implements OnInit {

  opcional = true;
  isLinear = true;
  stepperOrientation: Observable<StepperOrientation>;

  clientePost: ClientePost = new ClientePost;
  estados: Estados[];

  constructor(
    private _formBuilder: FormBuilder,
    private clienteService: ClientesService,
    private alertService: AlertService,
    private router: Router,
    private location: Location,
    private estadoService: EstadosService,
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver)
    { this.stepperOrientation = breakpointObserver
    .observe('(min-width: 868px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  dados = this._formBuilder.group({
    nome: ['',
      //torna o campo obrigatório
      [Validators.required,
      //Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres cada. Aceita acentuação e rejeita números.
      Validators.pattern(/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/),
      ]
    ],
    cpf: ['',
      [Validators.required,
      Validators.pattern('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$')
      ]
    ],
    dataNascimento: ['',[]], /*IMPORTANTE: NECESSÁRIO VALIDAR A DATA  */
  });

  contatos  = this._formBuilder.group({
    telefone1: ['',
      [Validators.required,
      Validators.pattern (/^[0-9]{8,11}$/)
     // Validators.pattern (/^\(?\d{2}\)?[\s-]?\d{5}-?\d{4}$/),

      ]
    ],
    telefone2: ['', [Validators.pattern (/^[0-9]{8,11}$/)]],
    email: ['',
      [Validators.email,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/)]
    ],
  });

  endereco  = this._formBuilder.group({
    logradouro: ['', [Validators.pattern(/^([a-zA-Z]{0,1}[a-zA-Z]{1,}'?-?[a-zA-Z]\s?([a-zA-Z]{1,})?)/)]],
    numero: ['', [Validators.pattern('^[0-9]{1,6}')]],
    complemento: ['', [Validators.pattern(/^([a-zA-Z]{1,}[a-zA-Z]{1,}'?-?[a-zA-Z]\s?([a-zA-Z]{1,})?)/)]],
    condominio: ['', [Validators.pattern(/^([a-zA-Z]{1,}[a-zA-Z]{1,}'?-?[a-zA-Z]\s?([a-zA-Z]{1,})?)/)]],
    bairro: ['', [Validators.pattern(/^([a-zA-Z]{1,}[a-zA-Z]{1,}'?-?[a-zA-Z]\s?([a-zA-Z]{1,})?)/)]],
    municipio: ['', [Validators.pattern(/^([a-zA-Z]{1,}[a-zA-Z]{1,}'?-?[a-zA-Z]\s?([a-zA-Z]{1,})?)/)]],
    estado: [''],
    cep: ['', [Validators.pattern(/^(\d{5}|\d{5}\-?\d{3})$/)] // aceita traço
  ],
  });

  observacoes  = this._formBuilder.group({
    observacao: [''],
  });

  ngOnInit(): void {
    this.buscarEstados();
  }

  buscarEstados(): void{
    this.estadoService.buscarEstados().subscribe({
      next: result => {
        this.estados = result;
      },
      error: e => {
        this.snackBar.open('Erro ao buscar os estados brasileiros.', '', { duration: 5000 });
      }
    })
  }

  cadastrar() {

    this.formPost(this.dados.value, this.contatos.value, this.endereco.value, this.observacoes.value);

    this.clienteService.cadastrar(this.clientePost).subscribe({
      next: result => {
        this.onSuccess(result)
      },
      error: e => {
        this.onError(e)
      }
    });
  }

  formPost(value: Partial<{ nome: string; cpf: string; dataNascimento: string; }>,
    value1: Partial<{ telefone1: string; telefone2: string; email: string; }>,
    value2: Partial<{ logradouro: string; numero: string; complemento: string; condominio: string; bairro: string; municipio: string; estado: string; cep: string; }>,
    value3: Partial<{ observacao: string; }>) {

    this.clientePost.nome = value.nome;
    this.clientePost.cpf = value.cpf;
    this.clientePost.dataNascimento = value.dataNascimento;
    this.clientePost.telefone1 = value1.telefone1;
    this.clientePost.telefone2 = value1.telefone2;
    this.clientePost.email = value1.email;
    this.clientePost.logradouro = value2.logradouro;
    this.clientePost.numero = value2.numero;
    this.clientePost.complemento = value2.complemento;
    this.clientePost.condominio = value2.condominio;
    this.clientePost.bairro = value2.bairro;
    this.clientePost.municipio = value2.municipio;
    this.clientePost.estado = value2.estado;
    this.clientePost.cep = value2.cep;
    this.clientePost.observacao = value3.observacao;
  }

  private onSuccess(result: Cliente) {
    this.alertService.success('Cliente ' + result.nome+ ' cadastrado(a) com sucesso');
    this.router.navigate(['cadastrar-cliente']);
  }

  private onError(e: any) {
    this.alertService.error(e.error.message);
    this.router.navigate(['cadastrar-cliente']);
  }

  // onCancel() {
  //   this.location.back();
  // }

  getErrorMessage(fieldName: string) {
    console.log(fieldName);

    const dados = this.dados.get(fieldName);
    const contatos = this.contatos.get(fieldName);
    const endereco = this.endereco.get(fieldName);
    const observacoes = this.observacoes.get(fieldName);

    if (dados?.hasError('required') || contatos?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (dados?.hasError('pattern') || contatos?.hasError('pattern')
      || endereco?.hasError('pattern')) {

      if(fieldName == 'cpf'){
        console.log(fieldName);
        return 'O cpf deve conter no mínimo 11 caracteres numéricos';
      }

      if(fieldName == 'telefone1'){
        console.log(fieldName);
        return 'O telefone deve conter entre 8 e 11 caracteres sem espaços e com o DDD';
      }

      if(fieldName == 'telefone2'){
        console.log(fieldName);
        return 'O telefone deve conter entre 8 e 11 caracteres sem espaços e com o DDD';
      }

      if(fieldName == 'email'){
        console.log(fieldName);
        return 'Email inválido';
      }

      if(fieldName == 'logradouro' || fieldName == 'numero'
        || fieldName == 'cep' || fieldName == 'complemento'
        || fieldName == 'condominio' || fieldName == 'bairro' || fieldName == 'municipio'){
        console.log(fieldName);
        return 'Não pode conter espaços vazios';
      }

      return 'Informe nome e sobrenome';
    }

    return 'Campo Inválido';
  }
}


