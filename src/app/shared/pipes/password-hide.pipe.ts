import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'passwordHide'
})
export class PasswordHide implements PipeTransform {

    transform(value: any): any {
        const newValue = "";
        return newValue.padStart(value.length, '*')
    }
}