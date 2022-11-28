import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from "rxjs";


@Injectable()
export class TraducaoMatPaginatorIntl implements MatPaginatorIntl {

  changes = new Subject<void>();

    firstPageLabel: string = 'Primeira página';
    lastPageLabel: string = 'Última página';

    itemsPerPageLabel: string = 'Qtde. por página:';
    nextPageLabel: string = 'Próximo';
    previousPageLabel: string = 'Anterior';

    getRangeLabel = function (page: number, pageSize: number, length: number): string {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length):
        startIndex - pageSize;

        return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
}

