import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionIcon } from './action-icons-const';

//Verificar o conceito desta importação do projeto CEF
//import { AppAuthGuard } from 'src/app/core/guards/app-auth.guard';
@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss'],
})
export class ActionIconComponent {
  @Input() actionIcon: ActionIcon;
  @Input() isSvg = false;
  @Input() size?: number;
  @Input() disabled = false;

  /**
   * EventEmitter para a ação do ícone. Deve ser usada no lugar do onClick do componente devido a opção do usuário
   * estar autorizado a ver o ícone, mas alguma outra condição programada poder bloquear a visualização (caso do disabled)
   */
  @Output() action = new EventEmitter<MouseEvent>();

  //constructor(private authGuard: AppAuthGuard) {}

  constructor(){}

  get authorized(): boolean {
    //return this.authGuard.authTransaction(this.actionIcon.transaction);
    return true;
  }

  callAction(event: MouseEvent): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    } else {
      this.action.emit(event);
    }
  }

  private listar(): void{
    console.log("Entrou no listar");
  }
}