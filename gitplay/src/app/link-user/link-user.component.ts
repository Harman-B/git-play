import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-link-user',
  templateUrl: './link-user.component.html',
  styleUrls: ['./link-user.component.css']
})
export class LinkUserComponent {
  
  user: object;
  public repoList: any[] = [];
  public commitList: any[] = [];

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
      .subscribe((resp) => {
        this.repoList = this.repoList.concat(resp.body);
        
        if(resp.headers.get('Link')) {
          let linkHeader = resp.headers.get('Link');
          console.log(linkHeader);
          
          if(linkHeader.includes('next')) {
            let links = this.linkParser(linkHeader);
            console.log(links);
            let nextURL = links['next']['url'];
            console.log(nextURL);
            this.getRepos(nextURL);
            // this._user.getRepoList(nextURL)
            //     .subscribe((resp2) => {
                  
            //       linkHeader = resp2.headers.get('Link');
            //       this.repoList = this.repoList.concat(resp2.body);
            //     })
            
          }
        }
      })
  }
       
  getCommits(repoURL: string) {
    let commitURL = repoURL + '/commits'
    this._user.getRepoList(commitURL)
      .subscribe((data) => {
        console.log(data);
        
        this.commitList.push(data);
      })
  }

  linkParser(link) {
    let re = /<([^\?]+\?[a-z]+=([\d]+))>;[\s]*rel="([a-z]+)"/g;
    let arrRes = [];
    let obj = {};
    while ((arrRes = re.exec(link)) !== null) {
      obj[arrRes[3]] = {
        url: arrRes[1],
        page: arrRes[2]
      };
    }
    return obj;
  }
}
