import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StepperOrientation } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ClienteRequestDTO } from 'src/app/dto/cliente/clienteRequestDTO';
import { Estados } from 'src/app/models/estados';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { EstadosService } from 'src/app/services/estados.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  opcional = true;
  isLinear = true;
  stepperOrientation: Observable<StepperOrientation>;
  estados: Estados[];
  picker: any;

  //Objeto sendo inicializado para receber os parâmetros do form no HTML
  cliente: ClienteRequestDTO = {
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
    municipio: '',
    estado: '',
    cep: '',
    logradouro: '',
    observacao: '',
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

  constructor(
    private _formBuilder: FormBuilder,
    private service: ClienteService,
    private estadoService: EstadosService,
    private alertService: AlertService,
    private router: Router,
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 868px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.buscarEstados();
  }

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

      if (fieldName == 'cpf') {
        console.log(fieldName);
        return 'O cpf deve conter no mínimo 11 caracteres numéricos';
      }

      if (fieldName == 'telefone1') {
        console.log(fieldName);
        return 'O telefone deve conter entre 8 e 11 caracteres sem espaços e com o DDD';
      }

      if (fieldName == 'telefone2') {
        console.log(fieldName);
        return 'O telefone deve conter entre 8 e 11 caracteres sem espaços e com o DDD';
      }

      if (fieldName == 'email') {
        console.log(fieldName);
        return 'Email inválido';
      }

      if (fieldName == 'logradouro' || fieldName == 'numero'
        || fieldName == 'cep' || fieldName == 'complemento'
        || fieldName == 'condominio' || fieldName == 'bairro' || fieldName == 'municipio') {
        console.log(fieldName);
        return 'Não pode conter espaços vazios';
      }

      return 'Informe nome e sobrenome';
    }
    return 'Campo Inválido';
  }

  buscarEstados(): void {
    this.estadoService.buscarEstados().subscribe({
      next: result => {
        this.estados = result;
      },
      error: e => {
        this.alertService.error('Erro ao buscar os estados brasileiros.', 'Erro!');
      }
    })
  }

  create(): void {
    console.log(this.cliente)
    this.service.create(this.cliente).subscribe(
      () => {
        console.log(this.cliente);
        this.alertService.success('Cliente cadastrado com sucesso');
        this.router.navigate(['clientes']);
      },
      err => {
        //Se retornar um vetor de erros exibe todos os erros
        if (err.error.errors) {
          err.error.errors.forEach(element => {
            console.log(err.erro.errors);
            this.alertService.error(element.message + '  ' + element.field);
            this.router.navigate(['clientes']);
          });
          //Retornando somente uma linha de erro e exibindo
        } else {
          console.log(err.error);
          this.alertService.error(err.error.message);
          console.log(err.erro);
          this.router.navigate(['clientes']);
        }
      })
  }

}
