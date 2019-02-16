import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { RepoList } from '../repoList';
 
@Component({
  selector: 'app-link-user',
  templateUrl: './link-user.component.html',
  styleUrls: ['./link-user.component.css']
})
export class LinkUserComponent implements OnInit {
  
  public repos;
  public user: object;
  constructor(private _user: UserService) { }

  ngOnInit() {
  }

  getUser(username: string) {
    this._user.getUserData(username)
      .subscribe((data) => {
        this.user = data;
      });
  }

  // getRepo(username) {
  //   console.log(username);
  //   this._repos.getGithubRepos(username)
  //     .subscribe((data: RepoList) => {
  //       // console.log(data.length);
  //       console.log(data);
        
  //       this.repos = data;
  //     });
  //   // console.log(this.repos);
    
  // }
}
