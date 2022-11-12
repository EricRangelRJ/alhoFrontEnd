import { Endereco } from "src/app/shared/models/endereco";

export class Cliente{
    idCliente?: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    telefone1: string;
    telefone2: string;
    email: string;
    observacao: string;
    endereco: Endereco;
}