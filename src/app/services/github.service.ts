import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


// https://api.github.com/users/vida-subhash
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

getUserDetails(userName: string) {
  return this.http.get(`https://api.github.com/users/${userName}`);
}

getRespos(repoUrl: string) {
  return this.http.get(repoUrl);
}


}
