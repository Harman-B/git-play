import { Component, OnInit } from '@angular/core';
import { ReposService } from '../repos.service';
import { RepoList } from '../repoList';

@Component({
  selector: 'app-link-user',
  templateUrl: './link-user.component.html',
  styleUrls: ['./link-user.component.css']
})
export class LinkUserComponent implements OnInit {
  
  public repos: RepoList[];

  constructor(private _repos: ReposService) { }

  ngOnInit() {
  }

  getRepo(username) {
    console.log(username);
    this._repos.getGithubRepos(username)
      .subscribe((data) => {
        console.log(data.length);
        console.log(data);
        
        this.repos = data;
        // console.log(this.repos);
      });
    // console.log(this.repos);
    
  }
}
