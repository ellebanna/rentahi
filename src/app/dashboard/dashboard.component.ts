import { Component, OnInit } from '@angular/core';
import { Posts } from '../post-form';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  yes = false
  yesOrNo = true
  showNotification: boolean;
  dataArr: any[] = []


  constructor(private dataService: ApiService) {

  }

  ngOnInit() {
    return this.dataService.shouldGetAllItem().subscribe(data => (this.dataArr = data));
  }

  yesClicked() {
    this.yesOrNo = false
    this.yes = true
  }

  back() {
    this.yesOrNo = true
    this.yes = false;
    this.showNotification = true;

    // setTimeout(function () {
    //   this.showNotification = true;
    // }, 3000);
  }

}
