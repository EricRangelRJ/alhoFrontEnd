import { Produto } from "src/app/produtos/models/produto";

export class ItemPedido{
    quantidade: number;
	preco: number;
	subTotal: number;
	produto: Produto;
}