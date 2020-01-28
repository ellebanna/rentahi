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

  public posts: Array<Posts>

  constructor(private route : ActivatedRoute,private dataService: ApiService) {
    this.posts = [
      {
        username: 'hanna',
        image: '../assets/shovel.jpg',
        title: 'Shovel',
        category: 'Sample',
        brand: 'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
        price: 100.00,
        description: 'Sample Description'
      },
      {
        username: 'mibel',
        image: '../assets/curler.jpg',
        title: 'Hair Curler',
        category: 'Sample',
        brand: 'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
        price: 100.00,
        description: 'Sample Description'
      },
      {
        username: 'nabelle',
        image: '../assets/tent.jpg',
        title: 'Camping Tent',
        category: 'Sample',
        brand: 'Sample Brandsdfsfgdfgdhfhhdfsdhgshadsaf',
        price: 100.00,
        description: 'Sample Description'
      },
      {
        username: 'username3',
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
    this.fetch()
  }
  fetch(id=1){
    this.dataService.shouldCheckUsername(id).subscribe((data)=>{
      console.log(data)
      this.user.push(data)
    })
  }

  yesClicked() {
    console.log("user " ,this.user)
    this.yesOrNo = false
    this.yes = true
   
  }

  back() {
    this.yesOrNo = true
    this.yes = false
  }
  

}
