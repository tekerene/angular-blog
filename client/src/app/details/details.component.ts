import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post/post';
import { HomeService } from '../home.service';
import { Category } from '../category/category';
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pageId = '';
  catList:any[] = [];
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
  };
  
  checkCat: Category = {
    id: '',
    catName: '',
    catDesc: '',
    catImgUrl:'',
    catContent:'',
    updated: null
  }
  isLoadingResults = true;

  constructor(private route: ActivatedRoute,private cat: CategoryService, private api: HomeService, private router: Router) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params.id);
    this.getPostCategory(this.route.snapshot.params.id);
    
    this.cat.getCategories()
      .subscribe((res: any) => {
        this.catList = res;

        console.log(this.catList);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  
  }

  getPostDetails(id: any) {
    this.api.getPost(id)
      .subscribe((data: any) => {
        this.post = data;
        console.log(this.post);
        this.pageId = `post/details/${this.post.id}`
        this.isLoadingResults = false;
      });
  }
  getPostCategory(id: any) {
    this.cat.getCategory(id)
      .subscribe((data: any) => {
        //console.log(data)
        this.checkCat = data;
        console.log(this.checkCat);
        this.isLoadingResults = false;
      });
  }
 

}
