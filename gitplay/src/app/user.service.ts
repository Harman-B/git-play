import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    url:string = '';

    constructor(private http: HttpClient) { }

    getUserData(username) {
        this.url = `https://api.github.com/users/${username}`;
        console.log(this.url);
        
        return this.http.get(this.url);
    }

    getRepoList(url: string) {
        console.log(url);
        
        return this.http.get(url, {observe: 'response'});
    }
    
    getCommitList(url: string) {
        console.log(url);
        
        return this.http.get(url, {observe: 'response'});
    }
}