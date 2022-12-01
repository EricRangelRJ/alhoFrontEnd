import { AbstractEntity } from "../abstract.entity";

export class ClienteListar extends AbstractEntity{
    constructor(
        public idCliente?: string,
        public nome?: string,
        public cpf?: string,
        public dataNascimento?: string,
        public telefone1?: string,
        public telefone2?: string,
        public email?: string,
        public observacao?: string
    ){
        super();
    }


}