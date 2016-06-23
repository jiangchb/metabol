import {Injectable} from 'angular2/core';
import { Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class Authentication {
    token: string;
    // headers: Headers;
    data2: string;
    serviceBase = "http://biodb.sehir.edu.tr/api2";
    options: RequestOptions;

    constructor(private http: Http) {
        this.token = localStorage.getItem('token');

        this.options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    }

    login(Email: String, Password: String) {
        let postData = { Email: Email, Password: Password, grant_type: "password" };
        this.http.post(this.serviceBase + "/token", JSON.stringify(postData), this.options)
            .map(res => {
                console.log(res);
                return res.json();
            })
            .subscribe((data) => {
                console.log(data.token);
                this.token = data.token;
                localStorage.setItem('token', this.token);
            });
    }

    /*logout() {

        return this.http.get(this.config.serverUrl + '/auth/logout', {
            headers: new Headers({
                'x-security-token': this.token
            })
        })
            .map((res: any) => {
            this.token = undefined;
            localStorage.removeItem('token');
        });

    }*/
}
