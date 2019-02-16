import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-link-user',
  templateUrl: './link-user.component.html',
  styleUrls: ['./link-user.component.css']
})
export class LinkUserComponent implements OnInit {
  
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

}
