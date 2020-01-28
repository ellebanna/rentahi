import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Posts } from '../post-form';
import { UserInformation } from '../signup/users';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number
  public user: Array<any> = []
  public posts: Array<Posts> =[]
  public user2:Array<UserInformation>=[]
  public u:string


  image1: File
  category1: String
  title1: String
  brand1: String
  price1: number
  description1: String

  constructor(private route: ActivatedRoute, private dataService: ApiService) { }

  ngOnInit() {
    this.fetch()
  }
  fetch(id = 1) {
    this.dataService.shouldCheckUsername(id).subscribe((data) => {
      this.u = data.UserName
      this.user.push(data)
    })
  }
  onSubmit(form) {
    console.log("user post ", this.user)
    console.log("sahfjsahdfghdugjhhdfg ",this.u)
    
    this.posts.push(form.form.value)
    console.log("posts ", this.posts)
    console.log("try", this.image1, this.category1, this.title1, this.brand1, this.price1, this.description1)
    alert("Successfull")
    form.form.reset()
  }

}
