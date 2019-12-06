import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchResult: any): any {
      if (!searchResult) {
        return  value;
      }
      const newArrayOfProducts = [];
      for (const item of value) {
        if (item.name.includes(searchResult.toLowerCase())) {
          newArrayOfProducts.push(item);
        }
      }
      return newArrayOfProducts;
  }
}
