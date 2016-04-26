import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({ name: 'keysValues'})
export class KeysValuesPipe implements PipeTransform {
    transform(value: { [key: string]: string[] | string }): Object {
        return Object.keys(value).map(key => key + ": "+ value[key]);
    }
}
