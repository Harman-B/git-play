import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    
    constructor(private http: HttpClient) { }

    githubAPI(url:string) {
        console.log(url);

        const response = this.http.get(url, {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            // params: new HttpParams().set('username', '').set('password', ''),
            observe: 'response'});
        return response;
    }
}