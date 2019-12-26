import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchByKey' })

export class SearchByKeyPipe implements PipeTransform {
    transform(products: any, searchKey: string) {
        return products.filter(e => e.name.toLowerCase().includes(searchKey));
    }
}