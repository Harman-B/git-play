import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    
    constructor(private http: HttpClient) { }

    githubAPI(url:string) {
        console.log(url);
        
        url = url + '?access_token=03abfa863fe6904145a8bb97df98e302290bbb8f';

        const response = this.http.get(url, {
            headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': '03abfa863fe6904145a8bb97df98e302290bbb8f'}),
            // params: new HttpParams().set('username', '').set('password', ''),
            observe: 'response'});
        return response;
    }
}
// auth token: 03abfa863fe6904145a8bb97df98e302290bbb8f