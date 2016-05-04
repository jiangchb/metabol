import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http';
import {FbaIteration} from './fbaiteration';

@Injectable()
export class FbaService {
    apiUrl = "http://biodb.sehir.edu.tr/api2/fba/";
    currentIteration: number;
    key: String;
    fbas: Array<FbaIteration>;

    constructor(private http: Http) {
        this.currentIteration = 0;
        this.fbas = new Array<FbaIteration>();
        this.startFba();
    }

    private startFba() {
        this.http.get(this.apiUrl + 'start')
            .map(res => res.json()).subscribe(
            (data) => {
                this.key = data['key'];
            });
    }

    getNextIteration(callback: (key: FbaIteration) => void) {
        this.currentIteration++;
        this.http.get(this.apiUrl + this.key + '/' + this.currentIteration)
            .map(res => res.json()).subscribe(
            (data: FbaIteration) => {
                callback(data);
                this.fbas.push(data);
            });
    }
}
