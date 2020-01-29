import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../post-form';
import { ActivatedRoute } from '@angular/router';
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
  dataArr: any[] = []
  @Input() postsList: Array<Posts>;

  constructor(private dataService: ApiService) {

  }

  ngOnInit() {
   
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
