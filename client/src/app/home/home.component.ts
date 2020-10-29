import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { HomeService } from '../home.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  isLoadingResults = true;
  totalRecords: String;
  page:any = 1;
  pageOfItems: [];

  constructor(private api: HomeService, private postService: PostService) {
    //this.posts = new Array<any>();
   }

  ngOnInit() {
    this.api.getPosts()
      .subscribe((res: any) => {
        this.posts = res;
        console.log(this.posts);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
