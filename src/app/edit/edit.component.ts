import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public post: Array<any> = []
  // userInfo :any
  postId:number

  toedit = false
  formedit = true

  image1: string
  category1: string
  title1: string
  brand1: string
  price1: number
  description1: string

  constructor(
    private route : ActivatedRoute,
    private dataService: ApiService
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params['id']
     
    this.dataService.getEdit(this.postId).subscribe(data =>{
      this.post.push(data)
    })

  }
  editForm(info) {
    this.image1 = info.image
    this.category1 = info.email
    this.title1 = info.title
    this.brand1 = info.brand
    this.price1 = info.price
    this.description1 = info.description
  }

}
