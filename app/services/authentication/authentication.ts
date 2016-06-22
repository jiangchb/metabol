// authentication.ts
import {Injectable} from 'angular2/core';
import { Http, Response, Headers} from 'angular2/http';

@Injectable()
export class Authentication {
    token: string;
    headers: Headers;
    data2:string;
    serviceBase = "http://biodb.sehir.edu.tr/api2";
    constructor(public http: Http) {
        this.token = localStorage.getItem('token');
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
    //    this.headers.append('Access-Control-Allow-Origin', '*');
        //this.headers.append('Content-Type','application/x-www-form-urlencoded');
        //this.headers.append('Authorization','Bearer ')
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Access-Control-Allow-Methods', 'POST');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }

    login(Email: String, Password: String) {
        //this.data2 = "grant_type=password&username=" + value.userName + "&password=" + value.password;
        return this.http.post(this.serviceBase+"/token", JSON.stringify({Email:Email,Password:Password}),
        { headers: this.headers })
            .map((res: any) => {
            let data = res.json();
            this.token = data.token;
            localStorage.setItem('token', this.token);
        });
        /*login(Email: String, Password: String) {

            return this.http.post("http://localhost:3000/token",JSON.stringify({grant_type:'password',Email:Email,Password:Password}),
            { headers: this.headers })
                .map((res: any) => {
                let data = res.json();
                this.token = res.access_token;
                localStorage.setItem('token', this.token);
            });*/

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
