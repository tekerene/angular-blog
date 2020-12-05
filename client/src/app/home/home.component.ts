import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../_services/post.service';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  isLoadingResults = true;
  totalRecords: string;
  page:any = 1;
  pageOfItems: [];

  constructor(private api: HomeService, private postService: PostService, private toast: ToastrService) {
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
  toastSuccess(){
    this.toast.success("successfull", "toast up")
      }
 

}
