import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { UserInformation } from '../signup/users';
import { ApiService } from '../api.service';
import { userDetails } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: String;
  private password: String;
<<<<<<< HEAD
  private user: any;
  public passId: Number;
  public usernamE = this.username;
  public users: userDetails
  showError = false;
=======
  dataArr: any[] = []
  user = false
  public loginuser: String;
  // data: any

>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155
  constructor(private router: Router, private dataService: ApiService) {

  }

  ngOnInit() {
<<<<<<< HEAD

  }

  login() {
    this.dataService.shouldGetAllUser().subscribe(res => {
      const a = Object.values(res);
      for (const data of a) {
        this.user = data
      }
      res.forEach(element => {
        if (element.username == this.username) {
          sessionStorage.setItem("username", this.username.toString())
          if (element.password == this.password) {
            this.router.navigate(['/dashboard'])
          }
        }
        this.showError = true;
        console.log('Not Found!!!');

      })
    }
    )
  }
=======
    return this.dataService.shouldGetUser().subscribe(data => (this.dataArr = data, console.log(this.dataArr)));

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
  // login() {
  //   this.data = {
  //     userName: this.username,
  //     password: this.password
  //   }
  //   this.dataService.LoginService(this.data).subscribe(resp => {
  //     console.log("Successfull")
  //   })
  //   console.log("login ", this.username)
  //   this.router.navigate(['/dashboard'])
  // }
>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155
}
