import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com/users';

  constructor(private httpClient: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${username}`);
  }
  
}
