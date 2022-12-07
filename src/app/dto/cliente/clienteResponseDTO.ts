import { Endereco } from "../endereco/endereco";

export class ClienteResponseDTO{
    idCliente: string;
    nome: string;
    cpf: string;
    dataNascimento: string;
    telefone1: string;
    telefone2: string;
    email: string;
    observacao: string;
    endereco: Endereco;
}