import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform = (value: any) => Object.keys(value);
}
