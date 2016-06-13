import {Injectable} from 'angular2/core';
import {SearchBar} from './searchBar';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchBarService {
    apiUrl: string;

    constructor(private http: Http) {
        this.apiUrl = 'http://biodb.sehir.edu.tr/api2/searchprefix/';

    }

    getSearch(query_name: string): Observable<SearchBar> {
        return this.http.get(this.apiUrl + query_name)
            .map(response => response.json());
    }

}
