import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post/post';
import { HomeService } from '../home.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: Post = {
    category: '',
    id: '',
    postTitle: '',
    postAuthor: '',
    postDesc: '',
    postContent: '',
    postReference: '',
    postImgUrl: '',
    created: null,
    updated: null
  }
  
  checkCat: Category = {
    id: null,
    catName: '',
    catDesc: '',
    catImgUrl:'',
    catContent:'',
    updated: null
  }
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: HomeService, private router: Router) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params.id);
    this.getPostCategory(this.route.snapshot.params.id);
  }

  getPostDetails(id: any) {
    this.api.getPost(id)
      .subscribe((data: any) => {
        this.post = data;
        console.log(this.post);
        this.isLoadingResults = false;
      });
  }
  getPostCategory(id: any) {
    this.api.getPostsByCategory(id)
      .subscribe((data: any) => {
        this.checkCat = data;
        console.log(this.checkCat);
        this.isLoadingResults = false;
      });
  }

}
