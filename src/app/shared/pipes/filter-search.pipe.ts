import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearchPipe',
  pure: false
})
export class FilterSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log("searchText", searchText)
    if(!items?.length) return [];
    if(!searchText) return items;
    searchText = searchText.toUpperCase();
    return items.filter(item =>  item.name.toUpperCase().includes(searchText));
  }

}
