import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { HomeService } from '../home.service';
import { Post } from '../post/post';
import { PostService } from '../post.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  

  posts = [];
  isLoadingResults = true;
  //data: Array<any>
  totalRecords: String;
  page:Number = 1;
  pageOfItems: Array<any>;

  constructor(private api: HomeService, private postService: PostService) {
    this.posts = new Array<any>();
   }

  ngOnInit() {
    this.api.getPosts()
      .subscribe((res: any) => {
        this.posts = res;
        //this.data = res.results;
        //console.log(this.data = res.results);
        
        console.log(this.posts);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
     
      //this.posts = Array(2).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }
  //onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    //this.pageOfItems = pageOfItems;
//}
}
