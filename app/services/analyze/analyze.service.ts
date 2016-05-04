import {Injectable} from 'angular2/core'

export class MetaboliteConcentration {
    name: String;
    concentration: String;
    exactValue: Number;
}

@Injectable()
export class AnalyzeService { }
