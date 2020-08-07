import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(saucers: any, search: any): any {

    if(search === undefined){
      return saucers;

    }else{
      return saucers.filter(saucer=>{
        return saucer.data.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }

}
