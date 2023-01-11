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
}