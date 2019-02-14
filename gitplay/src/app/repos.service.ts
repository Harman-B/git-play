import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map, catchError} from "rxjs/operators";
import { Observable } from 'rxjs';
import { RepoList } from './repoList';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  getGithubRepos(username): Observable<RepoList[]> {
    console.log(this);
    
    let url = '';
    url = `https://api.github.com/users/${username}/repos`;
    let repos = [];
    
    return this.http.get<RepoList[]>(url);

    // return ["hello", url];
  }
}
