export class ClientePostDTO{

    idCliente?: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    telefone1: string;
    telefone2: string;
    email: string;
    //Dados de endereço
    numero: string;
    complemento: string;
    condominio: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    logradouro: string;
    observacao: string;
}