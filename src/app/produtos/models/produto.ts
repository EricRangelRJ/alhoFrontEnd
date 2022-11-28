import { Fornecedor } from "src/app/fornecedores/models/fornecedor";

export class Produto {

  idProduto?: number;
	nomeProduto: string;
	codigo: string;
	descricao: string;
	dataCadastro: string;
	ativo: string;
	peso: string;
	valorCusto: string;
	valorVenda: string;
	margemLucro: string;
	fornecedor: Fornecedor;

}
