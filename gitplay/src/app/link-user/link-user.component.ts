import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-link-user',
  templateUrl: './link-user.component.html',
  styleUrls: ['./link-user.component.css']
})
export class LinkUserComponent {
  
  user: object;
  repoList: object;
  commitList: object;

  constructor(private _user: UserService) { }

  ngOnInit() {
  }

  getUser(username: string) {
    
    this._user.getUserData(username)
      .subscribe((data) => {
        this.user = data;
      });
  }

  getRepos(userURL: string) {
    this._user.getRepoList(userURL)
      .subscribe((data) => {
        console.log(data);
        
        this.repoList = data;
      })
  }

  getCommits(repoURL: string) {
    let commitURL = repoURL + '/commits'
    this._user.getRepoList(commitURL)
      .subscribe((data) => {
        console.log(data);
        
        this.commitList = data;
      })
  }
}
