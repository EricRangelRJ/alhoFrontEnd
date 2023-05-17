import { TipoEndereco } from "src/app/models/tipoEndereco/tipoEndereco";
import { TipoLogradouro } from "src/app/models/tipoLogradouro/tipoLogradouro";

export class Endereco {

    idEndereco?: string;
    tipoEndereco: TipoEndereco;
    tipoLogradouro: TipoLogradouro;
    logradouro: string;
    numero: string;
    complemento: string;
    condominio: string;
    bairro: string;
    municipio: string;
    estado: string;
    cep: string;
    isEnderecoDeEntrega: string;


    constructor() {
        this.tipoEndereco = {
            idTipoEndereco: '',
            descricao: ''
        };
        this.tipoLogradouro = {
            idTipoLogradouro: '',
            descricao: ''
        };
        this.logradouro = '';
        this.numero = '';
        this.complemento = '';
        this.condominio = '';
        this.bairro = '';
        this.municipio = '';
        this.estado = '';
        this.cep = '';
        this.isEnderecoDeEntrega='1';
    }

}