<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../post-form';
import { ActivatedRoute } from '@angular/router';
>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id:number
  public user: Array<any> = []
  yes = false
  yesOrNo = true
  showNotification: boolean;
  // dataArr: any[] = []
  public postsList:any [] = []
  

  constructor(private dataService: ApiService) {

  }

  ngOnInit() {
    return this.dataService.getAllPost().subscribe(data =>{ this.postsList = data
      console.log("data ",this.postsList)
    })
   
  }

  yesClicked() {
    console.log("user " ,this.user)
    this.yesOrNo = false
    this.yes = true
   
  }

  back() {
    this.yesOrNo = true
    this.yes = false;
    this.showNotification = true;
  }
  

}
