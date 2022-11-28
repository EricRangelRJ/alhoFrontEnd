import { Endereco } from "src/app/shared/models/endereco";

export class Fornecedor {

  idFornecedor?: number;
	nomeFornecedor: string;
  cpfCnpj: string;
  telefone1: string;
	telefone2: string;
	email: string;
	endereco: Endereco;
}
