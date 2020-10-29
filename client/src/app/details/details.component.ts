import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post/post';
import { HomeService } from '../home.service';
import { Category } from '../category/category';
import { CategoryService } from '../category.service'
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pageId = '';
  catList:any[] = [];
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

  constructor(
    private authApi: AuthService, 
    private route: ActivatedRoute,
    private cat: CategoryService, 
    private api: HomeService,
    private postService: PostService, 
    private router: Router) { }

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
