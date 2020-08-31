import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from './services/github.service';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github-login-firebase';


constructor(
    private auth: AuthService
) {
  auth.getUser().subscribe(
    (user) => {
      console.log(user);
    },
    (err) => {
      console.log(Error);
       }
  )
}

ngOnInit() {}

}
