import { Endereco } from "src/app/dto/endereco/endereco";

export class ClientePost {
    nome: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    observacao: string;
    endereco: Endereco = new Endereco();
}