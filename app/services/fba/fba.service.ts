import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http';
import {FbaIteration} from './fbaiteration';
import {MetaboliteConcentration} from '../analyze/analyze.service';

@Injectable()
export class FbaService {
    apiUrl = "http://biodb.sehir.edu.tr/api2/fba/";
    currentIteration: number;
    key: String;
    fbas: Array<FbaIteration>;

    constructor(private http: Http) {
        this.currentIteration = 0;
        this.fbas = new Array<FbaIteration>();
    }

    startFba() {
        this.http.get(this.apiUrl + 'start')
            .map(res => res.json()).subscribe(
            (data) => {
                this.key = data['key'];
            });
    }

    startFbaWithData(data: Array<MetaboliteConcentration>) {
        this.http.post(this.apiUrl + 'start', JSON.stringify(data))
            .map((res) => res.json).subscribe(
            (data) => {
                this.key = data['key'];
                console.log(this.key);
            });
    }

    getNextIteration(callback: (key: FbaIteration) => void) {
        this.currentIteration++;
        this.http.get(this.apiUrl + this.key + '/' + this.currentIteration)
            .map(res => res.json()).subscribe(
            (data: FbaIteration) => {
                this.fbas.push(data);
                callback(data);
            });
    }
}
