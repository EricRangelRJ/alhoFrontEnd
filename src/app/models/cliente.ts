export interface Cliente{
    id?: any;
    nome: string;
    cpf: string;
    dataNascimento: any;
    telefone1: string;
    telefone2: string;
    observacao: string;
    endereco: string [] ;
    pedidos:string[];
    email: string;
    senha: string;
}