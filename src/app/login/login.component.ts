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
  constructor(private router: Router, private dataService: ApiService) {

  }

  ngOnInit() {
    return this.dataService.shouldGetUser().subscribe(data => (this.dataArr = data));
  }

  login(id = 1) {
    this.dataService.shouldCheckUsername(id).subscribe(response => {
      if (response.UserName == this.username && response.Password == this.password) {
        this.router.navigate(['/dashboard'])
      } else {
        alert('Account Not Found')
      }
    })
  }

}
