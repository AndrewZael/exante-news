import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeparrafo'
})
export class RemoveParrafoPipe implements PipeTransform {
    transform(value: string) {
        const val = value.replace('<p>', '');
        const val2 = val.replace('</p>', '');
        return val2;
    }
}
