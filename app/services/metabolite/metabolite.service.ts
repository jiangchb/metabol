import {Metabolite} from './metabolite';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MetaboliteService {
    metabolite: any[];
    metaboliteUrl: string;

    constructor(private http: Http) {
        this.metaboliteUrl = 'http://biodb.sehir.edu.tr/api2/metabolite/';
    }

    getMetabolite(metaboliteId: string): Observable<Metabolite> {
        return this.http.get(this.metaboliteUrl + metaboliteId)
            .map(response => response.json());
    }
}
