import { Component, OnInit } from '@angular/core';
import { Posts } from '../post-form';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  yes = false
  yesOrNo = true
  showNotification: boolean;

  public posts: Array<Posts>

  constructor() {
    this.posts = [
      {
        owner: 'hanna',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
        price: 100.00,
        description: 'Sample Description'
      },
      {
        owner: 'mibel',
        image: '../assets/curler.jpg',
        title: 'Hair Curler',
        category: 'Sample',
        brand: 'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
        price: 100.00,
        description: 'Sample Description'
      },
      {
        owner: 'nabelle',
        image: '../assets/tent.jpg',
        title: 'Camping Tent',
        category: 'Sample',
        brand: 'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
        price: 100.00,
        description: 'Sample Description'
      },
      {
        owner: 'username3',
        image: '../assets/tent.jpg',
        title: 'Tent',
        category: 'Sample',
        brand: 'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
        price: 100.00,
        description: 'Sample Description'
      },
    ]
  }

  ngOnInit() {
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
