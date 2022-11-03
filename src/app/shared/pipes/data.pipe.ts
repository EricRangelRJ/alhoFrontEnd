import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(data: string, args?: any): string {
    if (data) {
      return moment(data).format('DD/MM/YYYY');
    } 
    return null;
  }

}


