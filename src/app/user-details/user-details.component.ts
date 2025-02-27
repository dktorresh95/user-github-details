import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  username: string = '';
  user$: Observable<any> | null = null;

  constructor(private route: ActivatedRoute, private githubService: GithubService) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    if (this.username) {
      this.user$ = this.githubService.getUser(this.username);
    }
  }
  
}
