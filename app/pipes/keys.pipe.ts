import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({ name: 'Keys'})
export class KeysPipe implements PipeTransform {
    transform(value: { [key: string]: string[] | string }): Object {
        return Object.keys(value).map(key => key);
    }
}
