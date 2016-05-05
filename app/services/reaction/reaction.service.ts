import {Injectable} from 'angular2/core';
import {Reaction} from './reaction';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReactionService {
    reaction: any[];
    reactionUrl: string;

    constructor(private http: Http) {
        this.reactionUrl = 'http://biodb.sehir.edu.tr/api2/reaction/';
    }

    getReaction(reactionId: string): Observable<Reaction> {
        return this.http.get(this.reactionUrl + reactionId)
            .map(response => response.json());
    }
}
