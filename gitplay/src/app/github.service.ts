import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    
    constructor(private http: HttpClient) { }

    githubAPI(url:string) {
        console.log(url);
        return this.http.get(url, {observe: 'response'});
    }
}