import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPass'
})
export class ShowPassPipe implements PipeTransform {

  transform(value: any, mostrarPass:boolean): any {

    if(!mostrarPass){
      for (let i = 0; i < value.length; i++) {
          value = value.replace(value[i],"*");
      }
    }

    return value;
  }

}
