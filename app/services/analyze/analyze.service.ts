import {Injectable} from 'angular2/core'

// TODO: concentration: String should be number
// TODO: name should be id of metabolite
export class MetaboliteConcentration {
    name: String;
    concentration: String;
    exactValue: Number;
}

@Injectable()
export class AnalyzeService { }
