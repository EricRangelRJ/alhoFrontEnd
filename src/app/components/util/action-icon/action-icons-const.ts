export interface ActionIcon {
    iconName: string;
    iconTooltip: string;
    iconId: string;
  }
  
  export interface ActionIcons {
    [attr: string]: ActionIcon;
  }
  
  export const FuncionalidadeActionIcons: ActionIcons = {
    incluir: {
      iconName: 'save',
      iconTooltip: 'Incluir',
      iconId: 'saveBtn',
    },
    listar: {
      iconName: 'arrow_back',
      iconTooltip: 'Voltar',
      iconId: 'voltarBtn',
    },
    alterar: {
      iconName: 'edit',
      iconTooltip: 'Alterar',
      iconId: 'editBtn',
    },
    excluir: {
      iconName: 'delete',
      iconTooltip: 'Excluir',
      iconId: 'deleteBtn',
    },
    consultar: {
      iconName: 'search',
      iconTooltip: 'Consultar',
      iconId: 'searchBtn'
    },
  };