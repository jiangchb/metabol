import {Injectable} from 'angular2/core'
import {Http, Headers, RequestOptions} from 'angular2/http';
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

    startFba(key?: string) {
        if (key)
            this.key = key;
        else
            this.http.get(this.apiUrl + 'start')
                .map(res => res.json()).subscribe(
                (data) => {
                    this.key = data['key'];
                });
    }

    getFbaKeyForData(data: Array<MetaboliteConcentration>, callback: (key: string) => void) {

        let options = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });

        this.http.post(this.apiUrl + 'start', JSON.stringify(data), options)
            .map((res) => res.json()).subscribe(
            (data) => {
                callback(data['key']);
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
