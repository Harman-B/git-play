import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    constructor(private http: HttpClient) { }

    getUserData(username) {
        let url = '';
        url = `https://api.github.com/users/${username}`;
        return this.http.get(url);
    }
}