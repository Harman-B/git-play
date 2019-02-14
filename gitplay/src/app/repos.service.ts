import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor() { }

  getGithubRepos(username) {
    console.log(username);
    
    let url = '';
    url = `https://api.github.com/users/${username}/repos`;

    return ["hello", url];
  }
}
