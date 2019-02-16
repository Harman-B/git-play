import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  getGithubRepos(username) {
    
    let url = '';
    url = `https://api.github.com/users/${username}/repos`;
    let repos = [];
    console.log(url);
    
    return this.http.get(url);

    // return ["hello", url];
  }
}
