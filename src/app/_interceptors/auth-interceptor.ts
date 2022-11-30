import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../usuarios/services/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    /*INETECEPTANDO REQUISIÇÕES NÃO AUTORIZADAS
    somente os endpopints "/api/auth" e "/api/usuarios" estão autorizados pela API a receber requisições http sem o token
    */
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        //VARIÁVEL PARA UMA NOVA REQUISIÇÃO
        let authRequest: HttpRequest<any> = req;

        //BUSCANDO UM USUÁRIO AUTENTICADO
        const authUser = this.authService.usuarioAutenticado();

        // VERIFICANDO SE OS ENDPOPINTS NÃO ESTÃO AUTORIZADOS
        if (authUser) {

            //CLONANDO A REQUSIÇÃO ORIGINAL. ADICIONANDO O TOKEN NO CABEÇALHO DA REQUISIÇÃO
            authRequest = req.clone({
                setHeaders: { Authorization: `Bearer ${authUser.accessToken}` }
            })
        }

        // envia solicitação clonada com cabeçalho para o próximo manipulador.(cabeçalhos clonados, atualizados e com a autorização.)
        return next.handle(authRequest);

    }
}
