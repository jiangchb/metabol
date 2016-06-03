import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'Keys' })
export class KeysPipe implements PipeTransform {
    transform = (value: any) => Object.keys(value);
}
