import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'intersection' })

export class IntercectionPipe implements PipeTransform {
    transform(products: any, list: number[]) {
        const result = products.filter( e => list.includes(e.id) );
        return result;
    }
}