import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  yes = false
  yesOrNo = true
  
  posts = 
    {
    owner:'',
    image: '../assets/shovel.jpg',
    title: 'Shovel',
    category:'Sample',
    brand:'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
    price: 100.00,
    description:'Sample Description'
  }

  

  constructor() { }

  ngOnInit() {
  }
  yesClicked(){
    this.yesOrNo = false
    this.yes = true
  }
  back(){
    this.yesOrNo = true
    this.yes = false
  }

}
