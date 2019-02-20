import { Component, OnChanges, Input } from '@angular/core';
import { APIService } from '../github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnChanges {

  @Input() url: string;
  public userDetails: object = {};

  constructor(private _userDetails: APIService) { }

  ngOnChanges() {
    this._userDetails.githubAPI(this.url)
      .subscribe((resp) => {

        // checking the rate limiting
        console.log(resp.headers.get('X-RateLimit-Limit'));
        console.log(resp.headers.get('X-RateLimit-Remaining'));
        
        this.userDetails = resp.body;
        });
  }
}
