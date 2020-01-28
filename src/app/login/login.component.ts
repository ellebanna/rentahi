import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformation } from '../signup/users';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: String;
  private password: String;
  dataArr: any[] = []
  user = false
  public loginuser: String;

  constructor(private router: Router, private dataService: ApiService) {

  }

  ngOnInit() {
    return this.dataService.shouldGetUser().subscribe(data =>  (this.dataArr = data,console.log(this.dataArr)));
    
  }

  login(id = 1) {
    this.dataService.shouldCheckUsername(id).subscribe(response => {
      if (response.UserName == this.username && response.Password == this.password) {
        console.log("login ",this.username)
        this.router.navigate(['/dashboard'])
      } else {
        alert('Account Not Found')
      }
    })

  }
}
