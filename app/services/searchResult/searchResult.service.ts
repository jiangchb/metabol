import {Injectable} from 'angular2/core';
import {SearchResult} from './searchResult';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchResultService {
    apiUrl: string;

    constructor(private http: Http) {
        this.apiUrl = 'http://biodb.sehir.edu.tr/api2/search/';
    }

    getSearchResult(query_name: string): Observable<SearchResult> {
        return this.http.get(this.apiUrl + query_name)
            .map(response => response.json());
    }

}
