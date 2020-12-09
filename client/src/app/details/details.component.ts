import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post/post';
import { Category } from '../category/category';
import { AuthService } from '../_services/auth.service';
import { CategoryService } from '../_services/category.service';
import { HomeService } from '../_services/home.service';
import { PostService } from '../_services/post.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
pageId = ''
  disquss : {
    pageId: '';
    catId: ''
  }
  catList = [];
  categories = [];
  postList = [];
  users = [];
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
    updated: null,
    readTime: null
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
  serviceCount: any;

  constructor(
    public authApi: AuthService, 
    public route: ActivatedRoute,
    public cat: CategoryService, 
    public api: HomeService,
    public postService: PostService, 
    public router: Router) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params.id);
    this.getPostCategory(this.route.snapshot.params.id);
    this.getusers();
    this.getPost();
    this.cat.getCategories()
      .subscribe((res: any) => {
        this.catList = res;
        console.log(this.catList);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  /**
   * @VISITOR COUNTER
   */
 // this.api.incrementPageCount().then(data => this.serviceCount.changeCount(data));
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

  getPost() {
    this.postService.getPosts().subscribe((res : any) => {
        this.postList = res;
        console.log(this.postList);
        this.isLoadingResults = false;
    }, err => {
        console.log(err);
        this.isLoadingResults = false;
    });
  }
  getCategories() {
    this.cat.getCategories().subscribe((res : any) => {
        this.categories = res;
        console.log(this.categories);
        this.isLoadingResults = false;
    }, err => {
        console.log(err);
        this.isLoadingResults = false;
    });
  }

  getusers() {
    this.authApi.getUsers().subscribe((res : any) => {
        this.users = res;
        console.log(this.users);
        this.isLoadingResults = false;
    }, err => {
        console.log(err);
        this.isLoadingResults = false;
    });
}
 

}
