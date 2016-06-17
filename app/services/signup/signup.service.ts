import {Injectable} from 'angular2/core';
import {Signup} from './signup';
import {Http, HTTP_PROVIDERS, Response,Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SignupService {
    headers: Headers;
    apiUrl: string;
    constructor(private http: Http) {
        this.apiUrl = 'http://biodb.sehir.edu.tr/api2/account/Register';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    onSubmit(value) {
        return this.http.post(this.apiUrl,
            JSON.stringify(value), { headers: this.headers })


    }

}
