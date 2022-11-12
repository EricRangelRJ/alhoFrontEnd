import { Cliente } from "src/app/clientes/models/cliente";
import { ItemPedido } from "./itemPedido";

export class Pedido{
    idPedido?: number;
	numeroPedido: string;
	dataPedido: string;
	dataEntrega: string;
	situacao: string;
	desconto: string;
	total: string;
    cliente: Cliente;
	//vendedor: Vendedor = new Vendedor;
    itens: ItemPedido[] = [];

}