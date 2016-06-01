import {Injectable} from 'angular2/core'

// TODO: name should be id of metabolite
export class MetaboliteConcentration {
    name: String;
    change: Number;
    exactValue: Number;
}

@Injectable()
export class AnalyzeService { }
