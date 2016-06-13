import {Injectable} from 'angular2/core';
import {Reaction, ConnectedMetabolites} from './reaction';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReactionService {
    reactionUrl: string;
    relatedMetabolitesUrl: string;

    constructor(private http: Http) {
        this.reactionUrl = 'http://biodb.sehir.edu.tr/api2/reaction/';
        this.relatedMetabolitesUrl = "http://biodb.sehir.edu.tr/api2/relatedmetabolites/"
    }

    getReaction(reactionId: string, callback: (reaction: Reaction) => void) {
        this.http.get(this.reactionUrl + reactionId)
            .map(response => response.json())
            .subscribe((data: Reaction) => callback(data));
    }


    getRelatedMetabolites(reactionId: string, callback: (data) => void) {
        this.http.get(this.relatedMetabolitesUrl + reactionId)
            .map(response => response.json())
            .subscribe(data => callback(data['metabolites']));
    }
}
