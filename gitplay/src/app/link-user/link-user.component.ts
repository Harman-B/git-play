import { Component, OnInit } from '@angular/core';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-link-user',
  templateUrl: './link-user.component.html',
  styleUrls: ['./link-user.component.css']
})
export class LinkUserComponent implements OnInit {
  
  public repos = [];

  constructor(private _repos: ReposService) { }

  ngOnInit() {
  }

  getRepo(username) {
    console.log(username);
    this.repos = this._repos.getGithubRepos(username);
    console.log(this.repos);
    
    
  }
}
